import { combineReducers } from 'redux';
import WaterTempReducer from './Investment/WaterTempReducer';
import { CoinInfoReducer, CoinListReducer } from './Investment/CoinInfoReducer';

const rootReducer = combineReducers({
  WaterTempReducer,
  CoinInfoReducer,
  CoinListReducer,
});

export default rootReducer;
