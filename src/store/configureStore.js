/* eslint global-require: 0 */
/* eslint no-underscore-dangle: 0 */
/* eslint no-undef: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import rootReducer from './rootReducer';

const browserHistory = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const hist = browserHistory;
  const middlewares = [routerMiddleware(hist)];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}
