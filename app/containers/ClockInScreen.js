import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image,
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
		}
		componentWillMount(){
			this.setState({
				PinText: '',
			});
		}

		TestFunc(pin)
		{
			var Pin = pin.data[0];
			for(var i = 1;i < pin.data.length;i++)
			{
				Pin += pin.data[i];
			}
			return(<Text>{Pin}</Text>);
		}
		submitButton()
		{			
			this.props.findPinUser(this.state.PinText);
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
						<TouchableHighlight onPress={this.submitButton}>
							<Text style = {styles.ClockInText}>Clock In</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => goBack()}>
							<Text style ={styles.CancelText}>Cancel</Text>
						</TouchableHighlight>
						<this.TestFunc data = {this.props.Pins} />
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
		
	},
	ClockInText:{
		fontSize: 40,
		backgroundColor: 'lightgreen',
		margin: 5,
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

export default connect((state) => {return {Pins: state.Pins}}, 
mapDispatchToProps)(ClockInScreen);