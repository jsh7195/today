import {
  COIN_INFO_SUCCESS,
  COIN_INFO_FAIL,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
  BIN_BTC_INFO_SUCCESS,
  BIN_BTC_INFO_FAIL,
  BinCoinInfo,
  ListCoinInfo,
  CoinInfo,
} from '@actions/Investment/CoinInfoActionTypes';

interface InitialBinBtcInfo {
  success: boolean;
  BinCoinInfo?: [BinCoinInfo]
}

interface InitialStateInfo {
  success: boolean;
  coinInfo?: [CoinInfo];
}

interface InitialStateList {
  success: boolean;
  coinList?: [ListCoinInfo];
}

const initialStateInfo: InitialStateInfo = {
  success: false,
};

const initialStateList: InitialStateList = {
  success: false,
};

const initialBinBtcInfo: InitialBinBtcInfo = {
  success: false,
};

export const CoinListReducer = (
  state = initialStateList,
  action: any
): InitialStateList => {
  switch (action.type) {
    case COIN_LIST_FAIL:
      return {
        ...state,
        success: false,
      };
    case COIN_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        coinList: action.coinList,
      };
    default:
      break;
  }
  return state;
};

export const CoinInfoReducer = (
  state = initialStateInfo,
  action: any
): InitialStateInfo => {
  switch (action.type) {
    case COIN_INFO_FAIL:
      return {
        ...state,
        success: false,
      };
    case COIN_INFO_SUCCESS:
      return {
        ...state,
        success: true,
        coinInfo: action.coinInfo,
      };
    default:
      break;
  }
  return state;
};

export const BinBtcInfoReducer = (
  state = initialBinBtcInfo,
  action: any
): InitialBinBtcInfo => {
  switch (action.type) {
    case BIN_BTC_INFO_FAIL:
      return {
        ...state,
        success: false,
      };
    case BIN_BTC_INFO_SUCCESS:
      return {
        ...state,
        success: true,
        BinCoinInfo: action.BinCoinInfo,
      };
    default:
      break;
  }
  return state;
};
