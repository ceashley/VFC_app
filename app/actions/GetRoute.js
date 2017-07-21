import * as types from './types'

export function getRoute(RouteId){
    console.log(RouteId);
    return (dispatch, getState) => {
        return fetch(`https://vfc-scheduler-api.ngrok.io/routes/`+RouteId)
        .then((response) => response.json())
        .then((responseJson) => {
        dispatch(setRoute(responseJson));
        })
        .catch( (ex) => {
        console.log(ex);
        });
    }
	
}

export function setRoute(Route)
{
    return{
		type : types.GET_ROUTE,
        Route,
	}
}