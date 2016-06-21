import 'bootstrap/dist/css/bootstrap.css';
import '../build/styles.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import calculateApp from './reducers/index';
import App from './components/App';

const localStore = store => next => action => {
  const result = next(action);
  localStorage.setItem('recalculator', JSON.stringify(store.getState()));
  return result;
};

const data = JSON.parse(localStorage.getItem('recalculator')) || { items: [], lastResult: 0 },
  store = createStore(calculateApp, data, applyMiddleware(localStore));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
