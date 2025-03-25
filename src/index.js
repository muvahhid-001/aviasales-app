import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/Store/Store';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
