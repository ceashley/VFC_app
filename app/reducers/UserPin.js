import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const Users = createReducer({},{
	[types.FIND_PIN](state,action){
        var pin = action.pin;

        let Users = {};
        Users[0] = {
            Pin: '1234',
            Name: 'Bob',
        }
        Users[1] = {
            Pin: '4321',
            Name: 'Joe',
        }
        Users[2] = {
            Pin: '1111',
            Name: 'Bill',
        }

        var name = 'wrong pin'

        Object.keys(Users).forEach(function(key) 
        {
            if(pin == Users[key].Pin)
            {
                name = Users[key].Name;
            }
            
        });
        return name;
            
    }
});