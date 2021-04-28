import { combineReducers } from 'redux';
import WaterTempReducer from './WaterTempReducer';
import { CoinInfoReducer, CoinListReducer } from './CoinInfoReducer';

const rootReducer = combineReducers({
  WaterTempReducer,
  CoinInfoReducer,
  CoinListReducer,
});

export default rootReducer;
