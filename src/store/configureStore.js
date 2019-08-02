import { createStore, applyMiddleware, compose } from 'redux';
import immutable from 'immutable';
import createRootReducer from './rootReducer';
import { createEpicMiddleware } from 'redux-observable';
import rootEpics from './rootEpics';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const initialState = immutable.fromJS({});

function configureStore(preloadedState = initialState) {
  const epicMiddleware = createEpicMiddleware();
  const middleware = [
    epicMiddleware,
    routerMiddleware(history)
  ];
  const composedEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancerComposed = composedEnhancers(applyMiddleware(...middleware));
  const store = createStore(createRootReducer(history), preloadedState, enhancerComposed);
  epicMiddleware.run(rootEpics);
  return store;
}

export default configureStore;
