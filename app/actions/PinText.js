import * as types from './types'
export function findPinUser(pin){
	return{
		type : types.FIND_PIN,
        pin
	}
}