import { combineReducers } from 'redux';
import * as JobArrayReducer from './JobArray'
import * as PinReducer from './UserPin'
import * as TruckReducer from './GetTruck'
import * as RouteArrayReducer from './RouteArray'
import * as ValidPinReducer from './ValidatePin'
import * as RouteReducer from './GetRoute'
import * as StartJobReducer from './StartJob'

export default combineReducers(Object.assign(
  JobArrayReducer,
  PinReducer,
  TruckReducer,
  RouteArrayReducer,
  ValidPinReducer,
  RouteReducer,
  //StartJobReducer,
));
