import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const ValidPin = createReducer({},{
	[types.VALID_PIN](state,action){
        var User = action.User;
        return User;
            
    }
});