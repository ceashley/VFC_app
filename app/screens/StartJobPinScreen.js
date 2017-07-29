import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
	 StackNavigator,
	 NavigationActions,
} from 'react-navigation';

class StartJobPinScreen extends Component {

		constructor(props) {
            super(props)
			this.submitButton = this.submitButton.bind(this);
			this.storePin = this.storePin.bind(this);
			this.IsValidPin = this.IsValidPin.bind(this);
		}
		componentWillMount(){
			this.setState({
				PinText: '',
                jobData: this.props.navigation.state.params.job,
			});
		}

		submitButton()
		{	
            this.props.validatePin(this.state.PinText);		
		}
		storePin = (text) =>{
			this.setState({ PinText: text})
		}
		IsValidPin()
		{
			var pin = this.props.ValidPin.Name
			if(pin == undefined)
			{
				return(<View/>)
			}
			if(pin == 'Invalid Pin')
			{
				return(<View><Text style = {styles.InvalidPinText}>Invalid Pin</Text></View>);
			}
			//send a message to server saying job has stared (this.props.navigation.state.params.job) or this.state.jobData
			//this.props.startJob(this.state.jobData)
			const {goBack} = this.props.navigation;
			Alert.alert(
				'Job Started',
				'press ok to continue',
				[
					{text: 'OK', onPress: () => goBack()},
				],
				{ cancelable: false }
			)
			return(<View/>)
		}
		render(){
			const {goBack} = this.props.navigation;
			console.log(this.state.jobData);
			return(
				<View  style = {styles.MainView} >
					<Image style = {styles.Logo} source = {require('../lib/vfc-logo.png')} />
					<TextInput style ={styles.PinBox} 						 
						onChangeText={this.storePin}
						defaultValue = ""
						maxLength = {4}/>
					<View style = {styles.Buttons}>
						<TouchableOpacity  onPress={this.submitButton}>
							<Text style = {styles.ClockInText}>Submit</Text>
						</TouchableOpacity >
						<TouchableOpacity  onPress={() => goBack()}>
							<Text style ={styles.CancelText}>Cancel</Text>
						</TouchableOpacity >
					</View>
					<this.IsValidPin/>
				</View>
			);
		}
}
const styles = StyleSheet.create({

	MainView:{
		justifyContent: 'center',
        alignItems: 'center',
		flex: 1,
        flexDirection: 'column',
		backgroundColor: 'white',
	},
	PinBox: {
		height: 60,
		minWidth: '50%',
		borderColor: 'gray', 
		borderWidth: 1,
		fontSize: 35,
		textAlign: 'center',
	},
	CancelText:{
		fontSize: 40,
		backgroundColor: 'tomato',
		margin: 5,
		borderRadius: 10,
  	 	borderWidth: 1,
		paddingHorizontal: 4,
		fontWeight: 'bold',
		
	},
	ClockInText:{
		fontSize: 40,
		backgroundColor: 'lightgreen',
		margin: 5,
		borderRadius: 10,
  	 	borderWidth: 1,
		paddingHorizontal: 4,
		fontWeight: 'bold'
	},
	Logo:
	{
		resizeMode: 'contain',
		margin: 20,	
		maxWidth: '75%',
		maxHeight:'75%',	
	},
	Buttons:
	{
		flexDirection: 'row',
		margin: 10,
	},
	InvalidPinText:
	{
		fontSize: 40,
		color: 'red',
		margin: 5,
		paddingHorizontal: 4,
		fontWeight: 'bold',
	},
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {ValidPin: state.ValidPin}}, 
mapDispatchToProps)(StartJobPinScreen);