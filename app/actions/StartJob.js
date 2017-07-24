import * as types from './types'

//remove JobList once server is taking jobs
export function startJob(jobId, JobList){
    
    Object.keys(JobList).forEach(function(key) {
    if(UserArray[key].JobId == jobId)
		{
            UserArray[key].JobStarted = true;
        }    
    })
    dispatch(setJobStart(JobList));
    //Commented out until server can handle job stuff
    /*return (dispatch, getState) => {
        return fetch(`https://vfc-scheduler-api.ngrok.io/routes/`+jobId)
        .then((response) => response.json())
        .then((responseJson) => {
        dispatch(setRoute(responseJson));
        })
        .catch( (ex) => {
        console.log(ex);
        });
    }*/
	
}

export function setJobStart(JobList)
{
    return{
		type : types.START_JOB,
        JobList,
	}
}