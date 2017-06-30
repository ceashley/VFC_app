import * as types from './types'
export function TruckArray(truck){
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
		type : types.TRUCK_ARRAY,
        truckData,
	}
}