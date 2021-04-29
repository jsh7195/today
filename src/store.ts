import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger'
const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;
