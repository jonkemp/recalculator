import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import calculateApp from './reducers/index';
import App from './components/App';

const localStore = store => next => action => {
  const result = next(action);
  localStorage.setItem('recalculator', JSON.stringify(store.getState()));
  return result;
};

const data = JSON.parse(localStorage.getItem('recalculator')) || { items: [], lastResult: 0, lastExpression: '' },
  store = createStore(
    calculateApp,
    data,
    compose(
      applyMiddleware(localStore),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
