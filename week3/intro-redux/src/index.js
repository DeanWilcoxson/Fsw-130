import React from 'react';
import { render } from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import App from './App'
import configureStore from './redux/store';
import initialState from './redux/initialState';
const store = configureStore(initialState);
render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
