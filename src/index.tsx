import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import calculateApp from './reducers/index';
import App from './components/App';

const localStore = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('recalculator', JSON.stringify(store.getState()));
  return result;
};

const data = JSON.parse(localStorage.getItem('recalculator') || '{}') || {
    items: [],
    lastResult: 0,
    lastExpression: '',
  },
  store = configureStore({
    reducer: calculateApp,
    preloadedState: data,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStore),
  });

const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
