import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/root';

const middlewares = [thunk];

/**
 * Configure the Redux store.
 * Works in both client-side (Vite/static) and original server-side contexts.
 */
export default function configureStore(initialState) {
  const ChromeWithExtension =
    typeof window !== 'undefined' && window.devToolsExtension;

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ChromeWithExtension ? window.devToolsExtension() : (f) => f
    )
  );

  return store;
}
