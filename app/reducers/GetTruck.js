import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const Truck = createReducer({},{
	[types.GET_TRUCK](state,action){
		let newState = action.truckData[action.truck];
		return newState;
	}
});
