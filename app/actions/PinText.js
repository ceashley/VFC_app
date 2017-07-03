import * as types from './types'
export function findPinUser(pin,status){
	let Users = {};
	Users[1234] = {
		Name: 'Bob',
		Status: 'out',
	}
	Users[4321] = {
		Name: 'Joe',
		Status: 'out',
	}
	Users[1111] = {
		Name: 'Bill',
		Status: 'out',
	}
	var User = {}
	if(Users[pin] != undefined)
	{
		User = Users[pin];
		User.Status = status;
	}
	return{
		type : types.FIND_PIN,
        User
	}
}