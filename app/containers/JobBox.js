import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import JobBoxData from '../componet/JobBoxData'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';


class JobBox extends Component {
	
	 constructor(props) {
            super(props)			
			this.props.makeJobArray();
		}

		JobMap(){
			return Object.keys(this.props.JobArray).map(key => this.props.JobArray[key])
		}
		render(){
			
			
			return( 
			<View>
			{this.JobMap().map((job) => {
				return(
					<View key={job.Addy}>
						<JobBoxData data = {job} />					
					</View>
				);
			})}
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

export default connect((state) => {return {JobArray: state.JobArray}}, mapDispatchToProps)(JobBox);