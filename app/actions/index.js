import * as JobBoxAction from './Jobs/JobArray'
import * as PinAction from "./Users/PinText"
import * as TruckAction from "./Routes/GetTruck"
import * as RouteArrayAction from "./Routes/RouteArray"
import * as ValidPinAction from './Users/ValidatePin'
import * as RouteAction from "./Routes/GetRoute"
import * as StartJobAction from "./Jobs/StartJob"

export const ActionCreators = Object.assign({},
  JobBoxAction,
  PinAction,
  TruckAction,
  RouteArrayAction,
  ValidPinAction,
  RouteAction,
  StartJobAction,
);
