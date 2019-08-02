import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as feed} from './feed';
const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  feed
});

export default createRootReducer;