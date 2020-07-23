import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import botAnswer from './botAnswer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(botAnswer, logger),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
