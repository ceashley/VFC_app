import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import JobBoxData from './JobBoxData'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';


class JobBox extends Component {
	
	 constructor(props) {
            super(props)					
				
		}
		componentWillMount(){
			this.props.makeJobArray(this.props.Route.rteID)
				
		}
		JobMap(){		
			
			return Object.keys(this.props.JobArray).map(key => this.props.JobArray[key])
		}
		render(){	
			return(							
				<View>
					{this.JobMap().map((job) => {
						if(job.jobAddress == undefined)
						{
							return(<View key={job.jobAddress}></View>);
						}
						return(
							<View style = {styles.JobBox} key={job.jobAddress}>
								<JobBoxData data = {job} navi={this.props.navi} />					
							</View>
						);
					})}
				</View>
			);
					
		}
}

const styles = StyleSheet.create({

	JobBox:
	{
		margin: 5,
		borderRadius: 20,
		
	},	
});



function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {JobArray: state.JobArray,Route: state.Route}}, mapDispatchToProps)(JobBox);