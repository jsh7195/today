import axios from 'axios';
import { Dispatch } from 'redux';
import {
  CoinInfoDispatchType,
  CoinListDispatchType,
  COIN_INFO_SUCCESS,
  COIN_INFO_FAIL,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL
} from './CoinInfoActionTypes';

export const fetchCoinListData = () => async (
  dispatch: Dispatch<CoinListDispatchType>
) => {
  try {
    const res = await axios.get('/COIN/INFO/market/all?isDetails=false');
    const { data } = res;
    dispatch({
      type: COIN_LIST_SUCCESS,
      result: true,
      coinList: data,
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

