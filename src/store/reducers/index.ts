import { combineReducers } from 'redux';
import WaterTempReducer from './Investment/WaterTempReducer';
import { CoinInfoReducer, CoinListReducer } from './Investment/CoinInfoReducer';
import { stock } from '../Slice/StockSlice';
import { corona } from '../Slice/CoronaSlice';
import { weather, air } from '../Slice/WeatherSlice';

const rootReducer = combineReducers({
  WaterTempReducer,
  CoinInfoReducer,
  CoinListReducer,
  stock: stock.reducer,
  corona: corona.reducer,
  weather: weather.reducer,
  air: air.reducer
});

export default rootReducer;
