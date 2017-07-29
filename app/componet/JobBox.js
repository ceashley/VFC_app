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
		JobMap(){
			//remove this after done testing			
			if(this.props.JobArray[1] == undefined)
				{
					this.props.makeJobArray(1);
				}
			return Object.keys(this.props.JobArray).map(key => this.props.JobArray[key])
		}
		render(){	
			return(							
				<View>
					{this.JobMap().map((job) => {
						return(
							<View style = {styles.JobBox} key={job.Addy}>
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

export default connect((state) => {return {JobArray: state.JobArray,}}, mapDispatchToProps)(JobBox);