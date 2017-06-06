import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const JobArray = createReducer({},{
	[types.JOB_ARRAY](state,action){
		let newState = {};
		let Jobs = {};
		Jobs[1] = 
		{
			name: 'Producers - Fresno',
			JobId: '215105',
			JobInfo: "gate code 1975 \n2. from the row of trailers to the north of the fuel island pick out 4 empty trailers and wash them out very well.\nAcid soap rinse\nwalls floor need to be very clean\nKEY: WASH THE MILK TANKERS RIGHT AWAY, AS THEY COME IN\n(Lavar los petroleros de leche inmediatamente)",
			
		}
		Jobs[2] = 
		{
			name: 'Producers - Fresno',
			JobId: '21510',
			JobInfo: "gate code 1975 \n2. from the row of trailers to the north of the fuel island pick out 4 empty trailers and wash them out very well.\nAcid soap rinse\nwalls floor need to be very clean\nKEY: WASH THE MILK TANKERS RIGHT AWAY, AS THEY COME IN\n(Lavar los petroleros de leche inmediatamente)",
			
		}
		newState[1] = 
		{
			Addy: '351 N Palm Ave, Fresno',
			JobsList: Jobs
		}
		newState[2] = 
		{
			Addy: 'Love Shack',
			JobsList: Jobs,
		}
		return newState;
	}
});
