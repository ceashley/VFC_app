import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const RouteList = createReducer({},{
	[types.START_JOB](state,action){
		let newState = action.JobList;
		if(newState == undefined)
			{
				return state;
			}
		return newState;
	}
});