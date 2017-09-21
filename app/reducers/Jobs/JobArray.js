import createReducer from '../../lib/createReducer'
import * as types from '../../actions/types'


export const JobArray = createReducer({},{
	[types.JOB_ARRAY](state,action){
		let newState = action.jobData;
		if(newState != undefined)
		{
			return newState;
		}
		return state;
	}
});
