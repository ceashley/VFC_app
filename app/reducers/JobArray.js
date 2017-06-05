import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const JobArray = createReducer({},{
	[types.JOB_ARRAY](state,action){
		let newState = {};
		for (var i = 0; i < 5; i++)
		{
			newState[i] = {element: i, nextElement: i+1};
		}
		return newState;
	}
});
