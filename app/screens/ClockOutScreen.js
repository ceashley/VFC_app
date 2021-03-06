import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from 'react-native';

import {
	 StackNavigator,
	 NavigationActions,
} from 'react-navigation';

class ClockInScreen extends Component {

		constructor(props) {
            super(props)
			this.submitButton = this.submitButton.bind(this);
			this.storePin = this.storePin.bind(this);
			this.clockOut = this.clockOut.bind(this);
			this.onBreak = this.onBreak.bind(this);
		}
		componentWillMount(){
			this.setState({
				PinText: '',
			});
		}
		clockOut()
		{
			const {goBack} = this.props.navigation;
			this.props.findPinUser(this.state.PinText,'out');
			goBack();
		}
		onBreak()
		{
			const {goBack} = this.props.navigation;
			this.props.findPinUser(this.state.PinText,'break');
			goBack();
		}
		
		submitButton()
		{	
			const {goBack} = this.props.navigation;
			Alert.alert(
				'Are you going on break?',
				'',
				[
					{text: 'Yes', onPress: () => this.onBreak()},
					{text: 'No', onPress: () => this.clockOut()},
				],
				{ cancelable: false }
			)
			
		}
		storePin = (text) =>{
			this.setState({ PinText: text})
		}

		render(){
			const {goBack} = this.props.navigation;
			return(
				<View  style = {styles.MainView} >
					<Image style = {styles.Logo} source = {require('../lib/vfc-logo.png')} />
					<TextInput style ={styles.PinBox} 						 
						onChangeText={this.storePin}
						defaultValue = ""
						maxLength = {4}/>
					<View style = {styles.Buttons}>
						<TouchableOpacity onPress={this.submitButton}>
							<Text style = {styles.ClockInText}>Clock Out</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => goBack()}>
							<Text style ={styles.CancelText}>Cancel</Text>
						</TouchableOpacity>
					</View>
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
		fontWeight: 'bold',
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
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {Users: state.Users}}, 
mapDispatchToProps)(ClockInScreen);