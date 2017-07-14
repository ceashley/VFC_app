import * as types from './types'
import Api from '../lib/api'

export function TruckArray(){    
	return (dispatch, getState) => {
        return fetch(`https://vfc-scheduler-api.ngrok.io/trucks`)
        .then((response) => response.json())
        .then((responseJson) => {
        dispatch(setSearchedRecipes(responseJson));
        })
        .catch( (ex) => {
        console.log(ex);
        });
  }
}export function setSearchedRecipes( truckData ) {
  return {
    type: types.TRUCK_ARRAY,
    truckData,
  }
}