import { applyMiddleware, createStore } from 'redux';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { logger } from 'redux-logger'

const middleware = [ ...getDefaultMiddleware(), thunk];

// if(process.env.NODE_ENV === 'development'){
//     middleware.push(logger);
// }

const store = configureStore({
    reducer : rootReducer,
    middleware
});

//const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export default store;
