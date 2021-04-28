import {
  COIN_INFO_SUCCESS,
  COIN_INFO_FAIL,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
  ListCoinInfo,
  CoinInfo,
} from '../actions/CoinInfoActionTypes';

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
