import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const RouteList = createReducer({},{
	[types.ROUTE_ARRAY](state,action){
		let newState = action.RouteData;
		if(newState == undefined)
			{
				return state;
			}
		return newState;
	}
});
