import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import getDirections from 'react-native-google-maps-directions'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';


class JobBoxData extends Component {
	
	 constructor(props) {
            super(props)
			this.state = {
				latitude: null,
				longitude: null,
				error: null,
			};
            this.StartJobClick = this.StartJobClick.bind(this);
			this.MapOnClick = this.MapOnClick.bind(this);
           
		}
		componentWillMount(){
			this.setState({
                backgroundColor: 'gray',
			});
			navigator.geolocation.getCurrentPosition(
      			(position) => {
					this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					error: null,
					});
      			},
      			(error) => this.setState({ error: error.message }),
			);
		}
		StartJobClick() {
			const { navigate } = this.props.navi;
			navigate('StartJobPinScreen',{job: this.props.data})
			if(this.props.data.jobStarted == true)
			{	
				this.setState({backgroundColor: 'lightgreen'}); 
			}
			else
			{
				this.setState({backgroundColor: 'gray'}); 
			}
			
        }
		MapOnClick(){			
			
			const data = {
				source: {
					latitude: this.state.latitude,
					longitude: this.state.longitude
				},	
				destination: {
					latitude: 0,
					longitude: 0
      			},			
				params: [
					{
					key: "daddr",
					value: this.props.data.Addy
					}
				]
			}
		
			getDirections(data)
		}

		JobStuff(job){
			console.log(job.data);
			if(job.data == null)
			{
				return(<View><Text>No Job Data for this Address</Text></View>);
			}
			var JobDataArray = job.data;
			var jobEntry = 'none';
			if(JobDataArray.jobEntry != null)
			{
				jobEntry = JobDataArray.jobEntry;
			}			
				return(
					<View>						
						<Text style = {styles.JobName}>{JobDataArray.jobShortName}</Text>
						<Text style = {styles.JobName}>Job {JobDataArray.jobId}</Text>
						<Text style = {styles.JobDescription}>{jobEntry}</Text>
					</View>
				);
					
			
			
		}
		render(){
			return(
				<View>
					<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
						<Text style = {styles.AddressText}>{this.props.data.jobAddress}</Text>
						<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
							<View style = {styles.MapButton}>
								<Button onPress={this.MapOnClick} title = "Map" />
							</View>
							<View style ={styles.StartButton}>
								<Button onPress={this.StartJobClick} title = "Start Job" />
							</View>
						</View>
					</View>
					<this.JobStuff data = {this.props.data} />						
				</View>
				);					
		}
}

const styles = StyleSheet.create({
	
	AddressBox: {
		backgroundColor: 'gray',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 4,	
	},
	AddressText:{
		fontSize: 40,
		color:'white',
	},
	JobName: {
		backgroundColor: 'darkgray',
		fontSize: 25,
		paddingHorizontal: 4,
	},
	JobDescription:
	{
		backgroundColor: 'lightgray',
		fontSize: 20,
		paddingHorizontal: 4,
	},	
	MapButton:
	{
		margin: 2,
	},
	StartButton:
	{
		margin: 2,
	}
	
});



function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, mapDispatchToProps)(JobBoxData);