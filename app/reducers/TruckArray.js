import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const TruckList = createReducer({},{
	[types.TRUCK_ARRAY](state,action){
		let newState = action.truckData;
		return newState;
	}
});
