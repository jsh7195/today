import { combineReducers } from 'redux';
import WaterTempReducer from './Investment/WaterTempReducer';
import { CoinInfoReducer, CoinListReducer } from './Investment/CoinInfoReducer';
import { stock } from '../Slice/StockSlice';
import { corona } from '../Slice/CoronaSlice';

const rootReducer = combineReducers({
  WaterTempReducer,
  CoinInfoReducer,
  CoinListReducer,
  stock: stock.reducer,
  corona: corona.reducer
});

export default rootReducer;
