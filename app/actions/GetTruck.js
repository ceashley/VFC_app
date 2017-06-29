import * as types from './types'
export function getTruck(truck){
    let truckData = {};
    truckData[0] = {
        Name: 'Default',
        Id: '007',
    }
    truckData[1] = {
        Name: 'FRESNO 2',
        Id: '28',
    }
    truckData[2] = {
        Name: 'LA 1',
        Id: '15',
    }
    
	return{
		type : types.GET_TRUCK,
        truckData,
        truck
	}
}