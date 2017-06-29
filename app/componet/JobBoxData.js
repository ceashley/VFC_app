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
				job: this.props.data,
            });
		}
		StartJobClick() {
			if(this.state.backgroundColor == 'gray')
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
		JobStuff(props){
			const JobDataArray = props.data;
			var JobData = [];
			Object.keys(JobDataArray).forEach(function(key) {
				JobData.push(
					<View key={JobDataArray[key].JobId}>	
						<View style = {styles.JobName}>
							<Text>{JobDataArray[key].name}</Text>
						</View>
						<View style = {styles.JobDescription}>
							<Text>{JobDataArray[key].JobInfo}</Text>
						</View>
					</View>
					);
			});
			return(<View>{JobData}</View>);
		}
		render(){
			
			return(
				<View>
					<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
						<Text style = {styles.AddressText}>{this.state.job.Addy}</Text>
						<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
							<View style = {styles.MapButton}>
								<Button onPress={this.MapOnClick} title = "Map" />
							</View>
							<View style ={styles.StartButton}>
								<Button onPress={this.StartJobClick} title = "Start Job" />
							</View>
						</View>
					</View>
					<this.JobStuff data = {this.state.job.JobsList} />						
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
	},
	AddressText:{
		fontSize: 20,
	},
	JobName: {
		backgroundColor: 'darkgray',
	},
	JobDescription:
	{
		backgroundColor: 'lightgray',
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