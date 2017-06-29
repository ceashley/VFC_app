import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const Users = createReducer({},{
	[types.FIND_PIN](state,action){
        var pin = action.pin;

        let Users = {};
        Users[1234] = {
            Name: 'Bob',
        }
        Users[4321] = {
            Name: 'Joe',
        }
        Users[1111] = {
            Name: 'Bill',
        }

        var name = 'wrong pin'        
        if(Users[pin] != undefined)
        {
            name = Users[pin].Name;
        }
        return name;
            
    }
});