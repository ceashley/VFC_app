import * as JobBoxAction from './JobArray'
import * as PinAction from "./PinText"
import * as TruckAction from "./GetTruck"
import * as TruckArrayAction from "./TruckArray"
import * as ValidPinAction from './ValidatePin'

export const ActionCreators = Object.assign({},
  JobBoxAction,
  PinAction,
  TruckAction,
  TruckArrayAction,
  ValidPinAction,
);
