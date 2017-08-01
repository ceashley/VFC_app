import { combineReducers } from 'redux';
import * as JobArrayReducer from './Jobs/JobArray'
import * as PinReducer from './Users/UserPin'
import * as TruckReducer from './Routes/GetTruck'
import * as RouteArrayReducer from './Routes/RouteArray'
import * as ValidPinReducer from './Users/ValidatePin'
import * as RouteReducer from './Routes/GetRoute'
import * as StartJobReducer from './Jobs/StartJob'

export default combineReducers(Object.assign(
  JobArrayReducer,
  PinReducer,
  TruckReducer,
  RouteArrayReducer,
  ValidPinReducer,
  RouteReducer,
  StartJobReducer,
));
