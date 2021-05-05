export const BIN_BTC_INFO_SUCCESS = 'BIN_BTC_INFO_SUCCESS';
export const BIN_BTC_INFO_FAIL = 'BIN_BTC_INFO_FAIL';

export const COIN_INFO_SUCCESS = 'COIN_INFO_SUCCESS';
export const COIN_INFO_FAIL = 'COIN_INFO_FAIL';

export const COIN_LIST_SUCCESS = 'COIN_LIST_SUCCESS';
export const COIN_LIST_FAIL = 'COIN_LIST_FAIL';

//김프 확인을 위한 바이낸스 api
//대장주인 비트코인만 확인한다.
export interface BinCoinInfo {
  symbol: string;
  proce: string;
}

export interface ListCoinInfo {
  market: string;
  korean_name: string;
  english_name: string;
}

export interface CoinInfo {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  prev_closing_price: number;
  change_price: number;
  change_rate: number;
}

export interface BinBtcInfoFailDispatch {
  type: typeof BIN_BTC_INFO_FAIL;
  result: boolean,
}
export interface BinBtcInfoSuccessDispatch {
  type: typeof BIN_BTC_INFO_SUCCESS;
  result: boolean,
  BinCoinInfo?: {};
}

export interface CoinInfoFailDispatch {
  type: typeof COIN_INFO_FAIL;
  result: boolean,
}
export interface CoinInfoSuccessDispatch {
  type: typeof COIN_INFO_SUCCESS;
  result: boolean,
  coinInfo?: {};
}

export interface CoinListFailDispatch {
  type: typeof COIN_LIST_FAIL;
  result: boolean,
}
export interface CoinListSuccessDispatch {
  type: typeof COIN_LIST_SUCCESS;
  result: boolean,
  coinList?: any;
}

export type CoinInfoDispatchType =
  | CoinInfoFailDispatch
  | CoinInfoSuccessDispatch;

export type CoinListDispatchType =
  | CoinListFailDispatch
  | CoinListSuccessDispatch;

export type BinBtcInfoDispatchType =
  | BinBtcInfoFailDispatch
  | BinBtcInfoSuccessDispatch;
