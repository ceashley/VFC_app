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

            this.onClick = this.onClick.bind(this);
            this.state = {
                backgroundColor: 'gray',
				job: props.data,
            };
		}
		onClick() {
			if(this.state.backgroundColor == 'gray')
			{	
				this.setState({backgroundColor: 'lightgreen'}); 
			}
			else
			{
				this.setState({backgroundColor: 'gray'}); 
			}
			
        }
		
		JobStuff(props){
			const JobDataArray = props.data;
			console.log(JobDataArray);
			var JobData = [];
			for(let i=0;i<2;i++)
			JobData.push(
				<View key={JobDataArray[i].JobId}>	
					<View style = {styles.JobName}>
						<Text>{JobDataArray[i].name}</Text>
					</View>
					<View style = {styles.JobDescription}>
						<Text>{JobDataArray[i].JobInfo}</Text>
					</View>
				</View>
				);
			return(<View>{JobData}</View>);
		}
		render(){
			
			console.log(this.state);
			return(
				<View>
					<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
						<Text style = {styles.AddressText}>{this.state.job.Addy}</Text>
						<Button onPress={this.onClick} title = "Start Job" />
					</View>
					<this.JobStuff data = {this.state.job.JobsList} />						
				</View>
				);					
		}
}

const styles = StyleSheet.create({
	
	AddressBox: {
		//flex: 1,
		backgroundColor: 'gray',
		flexDirection: 'row',
	},
	AddressText:{
		fontSize: 20,
	},
	JobName: {
		//flex: 1,
		backgroundColor: 'darkgray',
	},
	JobDescription:
	{
		//flex: 1,
		backgroundColor: 'lightgray',
	},	
	
});



function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {JobArray: state.JobArray}}, mapDispatchToProps)(JobBoxData);