import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../redux/store';
import App from '../containers/App';
import { Provider } from 'react-redux';

let preloadedState = {};
if (window.__PRELOADED_STATE__) {
  try {
    preloadedState = JSON.parse(unescape(window.__PRELOADED_STATE__));
  }
  catch (e) {
    // TODO: Handle the error.
  }
}

const store = configureStore(preloadedState);
const supportsHistory = 'pushState' in window.history;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.hydrate((
    <Provider store={store}>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
});
