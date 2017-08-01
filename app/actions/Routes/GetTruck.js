import * as types from '../types'

export function getTruck(truckId){
    return (dispatch, getState) => {
        return fetch(`https://vfc-scheduler-api.ngrok.io/trucks/`+truckId)
        .then((response) => response.json())
        .then((responseJson) => {
        dispatch(setTruck(responseJson));
        })
        .catch( (ex) => {
        console.log(ex);
        });
    }
	
}

export function setTruck(truck)
{
    return{
		type : types.GET_TRUCK,
        truck,
	}
}