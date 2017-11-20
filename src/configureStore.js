import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { rootReducers } from './reducers';
import { loadState, saveState } from './localStorage';

const logger = createLogger({
  duration: false, // print the duration of each action?
  diff: true,
});

let persistedData = loadState();

const store = createStore(rootReducers, persistedData, applyMiddleware(thunk, logger));

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
