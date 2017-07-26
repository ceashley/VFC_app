import * as types from './types'

//remove JobList once server is taking jobs
export function startJob(job){

    job.JobStarted = true
    dispatch(setJobStart(job));
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

export function setJobStart(job)
{
    return{
		type : types.START_JOB,
        job,
	}
}