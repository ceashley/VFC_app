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
				PinText: 'lemon',
			});
		}
		submitButton()
		{
			console.log(this.state.PinText);
		}
		storePin = (text) =>{
			this.setState({ PinText: text})
		}
		render(){
			const {goBack} = this.props.navigation;
			return(
				<View  style = {styles.MainView} >
					<TextInput style ={styles.PinBox} 						 
						onChangeText={this.storePin}
						defaultValue = ""/>
					<TouchableHighlight onPress={this.submitButton}>
						<Text>Clock In</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => goBack()}>
							<Text>GoBack</Text>
					</TouchableHighlight>
				</View>
			);
		}
}
const styles = StyleSheet.create({

	MainView:{
	},
	PinBox: {
		height: 40,
		borderColor: 'gray', 
		borderWidth: 1,
	},
	CancelButton:{
		flex: 1,
	},
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, 
mapDispatchToProps)(ClockInScreen);