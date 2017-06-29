import * as types from './types'
export function getTruck(truck){
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
    
	return{
		type : types.GET_TRUCK,
        truckData,
        truck
	}
}