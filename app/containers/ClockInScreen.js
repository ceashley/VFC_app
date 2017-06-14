import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'

import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class ClockInScreen extends Component {

		constructor(props) {
            super(props)
		}
		render(){
			const {navigate} = this.props.navigation;
			return(
				<View>
					<TouchableHighlight onPress={() => navigate('Home')}>
						<Text>ClockInScreen</Text>
					</TouchableHighlight>
				</View>
			);
		}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, 
mapDispatchToProps)(ClockInScreen);