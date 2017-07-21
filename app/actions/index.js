import * as JobBoxAction from './JobArray'
import * as PinAction from "./PinText"
import * as TruckAction from "./GetTruck"
import * as RouteArrayAction from "./RouteArray"
import * as ValidPinAction from './ValidatePin'
import * as RouteAction from "./GetRoute"

export const ActionCreators = Object.assign({},
  JobBoxAction,
  PinAction,
  TruckAction,
  RouteArrayAction,
  ValidPinAction,
  RouteAction,
);
