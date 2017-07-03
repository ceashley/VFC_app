import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const Users = createReducer({},{
	[types.FIND_PIN](state,action){
        var User = action.User;
            
        return User;
            
    }
});