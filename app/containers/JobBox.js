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


class JobBox extends Component {
	
	 constructor(props) {
            super(props)

            this.onClick = this.onClick.bind(this);
			
			
            this.state = {
                backgroundColor: 'gray'
            };
		}
		onClick() {
            console.log('clicked ');
			if(this.state.backgroundColor == 'gray')
			{	
				this.setState({backgroundColor: 'lightgreen'}); 
			}
			else
			{
				this.setState({backgroundColor: 'gray'}); 
			}
			
        }
		Jobs(){
			return Object.keys(this.props.JobArray).map(key => this.props.JobArray[key])
		}
		render(){
			
			console.log(this.Jobs());
			return( 
			<View>
			{this.Jobs().map((job) => {
				return(
					<View key={job.JobId}>
						<View style = {[styles.AddressBox, {backgroundColor: this.state.backgroundColor}]}>
							<Text style = {styles.AddressText}>{job.Addy}</Text>
							<Button onPress={this.onClick} title = "Start Job" />
						</View>
						<View style = {styles.JobName}>
							<Text>{job.Job}</Text>
						</View>
						<View style = {styles.JobDescription}>
							<Text>{job.JobInfo}</Text>
						</View>
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