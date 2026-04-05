/**
 * Client entry point — GitHub Pages / static hosting version.
 *
 * Key differences from the original server-rendered entry:
 *  1. Uses HashRouter instead of BrowserRouter so all navigation works
 *     without a server (GitHub Pages serves only static files).
 *  2. Uses ReactDOM.render instead of ReactDOM.hydrate (no SSR).
 *  3. No __PRELOADED_STATE__ hydration needed.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import App from '../containers/App';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
