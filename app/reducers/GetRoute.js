import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const Route = createReducer({},{
	[types.GET_ROUTE](state,action){
		let newState = action.Route;
		if(newState == undefined)
			{
				return state;
			}
		return newState;
	}
});
