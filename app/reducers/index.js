import { combineReducers } from 'redux';
import * as JobArrayReducer from './JobArray'
import * as PinReducer from './UserPin'

export default combineReducers(Object.assign(
  JobArrayReducer,
  PinReducer,
));
