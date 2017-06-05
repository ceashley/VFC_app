import { combineReducers } from 'redux';
import * as JobArrayReducer from './JobArray'

export default combineReducers(Object.assign(
  JobArrayReducer,
));
