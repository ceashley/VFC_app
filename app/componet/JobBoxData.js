import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';


class JobBoxData extends Component {
	
	 constructor(props) {
            super(props)

            this.StartJobClick = this.StartJobClick.bind(this);
			this.MapOnClick = this.MapOnClick.bind(this);
           
		}
		componentWillMount(){
			this.setState({
                backgroundColor: 'gray',
            });
		}
		StartJobClick(started) {
			//add a dispatch for the job
			const { navigate } = this.props.navi;
			navigate('StartJobPinScreen',{job: this.props.data})
			if(started == true)
			{	
				this.setState({backgroundColor: 'lightgreen'}); 
			}
			else
			{
				this.setState({backgroundColor: 'gray'}); 
			}
			
        }
		MapOnClick(){
			console.log('MapOnClick');
		}
		JobStuff(job){
			const JobDataArray = job.data;
			var JobData = [];
			Object.keys(JobDataArray).forEach(function(key) {
				JobData.push(
					<View  key={JobDataArray[key].JobId}>						
						<Text style = {styles.JobName}>{JobDataArray[key].name}</Text>
						<Text style = {styles.JobDescription}>{JobDataArray[key].JobInfo}</Text>
					</View>
					);
			});
			return(<View>{JobData}</View>);
		}
		render(){
			return(
				<View>
					<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
						<Text style = {styles.AddressText}>{this.props.data.Addy}</Text>
						<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
							<View style = {styles.MapButton}>
								<Button onPress={this.MapOnClick} title = "Map" />
							</View>
							<View style ={styles.StartButton}>
								<Button onPress={this.StartJobClick(this.props.data.JobStarted)} title = "Start Job" />
							</View>
						</View>
					</View>
					<this.JobStuff data = {this.props.data.JobsList} />						
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

export default connect((state) => {return {JobArray: state.JobArray}}, mapDispatchToProps)(JobBoxData);