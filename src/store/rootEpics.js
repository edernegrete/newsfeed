import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import { epics as feedEpics } from './feed';
import { combineEpics } from 'redux-observable';
const rootEpic = combineEpics(...feedEpics);
export default rootEpic