import * as types from '../types'
export function validatePin(pin){
	let Users = {};
	Users[1234] = {
		Name: 'Rafael B',
		Status: 'out',
	}
	Users[4321] = {
		Name: 'Matias C',
		Status: 'out',
	}
	Users[1111] = {
		Name: 'Jesus B',
		Status: 'out',
	}
	var User ={};
	if(Users[pin] != undefined)
	{
		User = Users[pin].Name;
	}
    else
    {
        User = 'Invalid Pin';
    }
	return{
		type : types.VALID_PIN,
        User
	}
}