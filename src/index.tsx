import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux"
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
// sagaMiddleware.run()

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

