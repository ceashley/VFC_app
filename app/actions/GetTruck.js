import * as types from './types'
export function getTruck(truckId){
    let truckData = {};
    truckData[0] = {
        Name: 'Default',
        Id: '0',
    }
    truckData[28] = {
        Name: 'FRESNO 2',
        Id: '28',
    }
    truckData[15] = {
        Name: 'LA 1',
        Id: '15',
    }
    var truck = truckData[truckId];
	return{
		type : types.GET_TRUCK,
        truck,
	}
}