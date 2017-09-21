import * as types from '../types'

export function makeJobArray(route)
{
	return (dispatch, getState) => {
		return fetch(`https://vfc-scheduler-api.ngrok.io/jobs?routeid=`+route)
		.then((response) => response.json())
		.then((responseJson) => {
		dispatch(jobs(responseJson));
		})
		.catch( (ex) => {
		console.log(ex);
		});}	
}


 function jobs(jobData){	
	//console.log(jobData);
	return{
		type : types.JOB_ARRAY,
		jobData,
	}
}