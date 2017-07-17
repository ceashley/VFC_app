import * as types from './types'

function jobs(truck)
{
	if(truck == undefined)
	{
		return {};
	}
	let newState = {};
	let JobOne = {};
	let JobTwo = {};
	JobOne[0] = 
	{
		name: 'Producers - Fresno',
		JobId: '215105',
		JobInfo: "gate code 1975 \n\n2. from the row of trailers to the north of the fuel island pick out 4 empty trailers and wash them out very well.\n\t*Acid soap rinse\n\t*Walls floor need to be very clean\nKEY: WASH THE MILK TANKERS RIGHT AWAY, AS THEY COME IN\n(Lavar los petroleros de leche inmediatamente)",
		
	};
	JobTwo[0] = 
	{
		name: 'VTR-BNSF - bnsf/fri/FRESNO',
		JobId: '215056',
		JobInfo: "None",
		
	};
	JobTwo[1] = 
	{
		name: 'VTR-BNSF - Trailers Friday',
		JobId: '215404',
		JobInfo: "Place Sticker on trailers after wash",
	}
	if(truck == 1)
	{
		newState[1] = 
		{
			Addy: '351 N Palm Ave, Fresno',
			JobsList: JobOne,
		}
	}
	newState[2] = 
	{
		Addy: 'Love Shack',
		JobsList: JobTwo,
	}
	return newState;
}


export function makeJobArray(truck){
	
	var jobData = jobs(truck);
	return{
		type : types.JOB_ARRAY,
		jobData,
	}
}