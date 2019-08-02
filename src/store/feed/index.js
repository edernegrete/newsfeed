import reducer from './reducers';
import * as actions from './actions';
import * as actionsCreators from './action-creators';
import epics from './epics';

export {
  actionsCreators,
  actions,
  epics,
  reducer
}

export default reducer;