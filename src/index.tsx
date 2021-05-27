// import 'core-js/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
// import 'react-app-polyfill/stable'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "antd/dist/antd.css";
import App from './App';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
