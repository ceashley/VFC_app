import * as types from '../types'

export function getRoute(Route){

    return{
		type : types.GET_ROUTE,
        Route,
	}
}