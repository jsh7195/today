import axios from 'axios';
import { filter } from 'lodash'; 
import { Dispatch } from 'redux';
import {
  CoinInfoDispatchType,
  CoinListDispatchType,
  BinBtcInfoDispatchType,
  BinCoinInfo,
  ListCoinInfo,
  COIN_INFO_SUCCESS,
  COIN_INFO_FAIL,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
  BIN_BTC_INFO_SUCCESS
  ,BIN_BTC_INFO_FAIL
} from './CoinInfoActionTypes';

export const fetchCoinListData = () => async (
  dispatch: Dispatch<CoinListDispatchType>
) => {
  try {
    const res = await axios.get('/COIN/INFO/market/all?isDetails=false');
    const { data } = res;
    const krwMarket = filter(data, (item:ListCoinInfo) => {
      return item.market.startsWith('KRW');
    })
    dispatch({
      type: COIN_LIST_SUCCESS,
      result: true,
      coinList: krwMarket,
    });
  } catch (error) {
    dispatch({
      type: COIN_LIST_FAIL,
      result: false
    });
  }
};

export const fetchCoinInfoData = (market:string) => async (
  dispatch: Dispatch<CoinInfoDispatchType>
) => {
  try {
    const res = await axios.get(`/COIN/INFO/candles/days?count=1&market=${market}`);
    const { data } = res;
    dispatch({
      type: COIN_INFO_SUCCESS,
      result: true,
      coinInfo: data,
    });
  } catch (error) {
    dispatch({
      type: COIN_INFO_FAIL,
      result: false
    });
  }
};

export const fetchBinBtcInfoData = () => async (
  dispatch: Dispatch<BinBtcInfoDispatchType>
) => {
  try {
    const res = await axios.get(`/BINANCE`);
    const { data } = res;
    dispatch({
      type: BIN_BTC_INFO_SUCCESS,
      result: true,
      BinCoinInfo: data,
    });
  } catch (error) {
    dispatch({
      type: BIN_BTC_INFO_FAIL,
      result: false
    });
  }
};

