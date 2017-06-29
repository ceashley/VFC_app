import { combineReducers } from 'redux';
import * as JobArrayReducer from './JobArray'
import * as PinReducer from './UserPin'
import * as TruckReducer from './GetTruck'
import * as TruckArrayReducer from './TruckArray'

export default combineReducers(Object.assign(
  JobArrayReducer,
  PinReducer,
  TruckReducer,
  TruckArrayReducer
));
