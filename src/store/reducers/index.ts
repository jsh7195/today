import { combineReducers } from 'redux';
import WaterTempReducer from './Investment/WaterTempReducer';
import { CoinInfoReducer, CoinListReducer } from './Investment/CoinInfoReducer';
import { stock } from '../Slice/StockSlice';

const rootReducer = combineReducers({
  WaterTempReducer,
  CoinInfoReducer,
  CoinListReducer,
  stock: stock.reducer
});

export default rootReducer;
