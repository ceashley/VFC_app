import * as types from './types'
import Api from '../lib/api'

export function RouteArray(){    
	return (dispatch, getState) => {
        return fetch(`https://vfc-scheduler-api.ngrok.io/routes`)
        .then((response) => response.json())
        .then((responseJson) => {
        dispatch(setRouteArray(responseJson));
        })
        .catch( (ex) => {
        console.log(ex);
        });
  }
}export function setRouteArray( RouteData ) {
  console.log("RA: " + RouteData);
  return {
    type: types.ROUTE_ARRAY,
    RouteData,
  }
}