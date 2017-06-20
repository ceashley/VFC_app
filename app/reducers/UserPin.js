import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const Pins = createReducer({},{
	[types.FIND_PIN](state,action){
        var pin = action.pin;
        let Users = {};
        Users[0] = {
            Pin: '1234',
            Name: 'Bob',
        }
        if(pin == Users[0].Pin)
        {
            return Users[0].Name;
        }
        else
        {
            return('wrong pin');
        }
    }
});