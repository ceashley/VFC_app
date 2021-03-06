import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import Home from './Home'
import ClockInScreen from './ClockInScreen'
import ClockOutScreen from './ClockOutScreen'
import RoutesScreen from './RoutesScreen'
import StartJobPinScreen from'./StartJobPinScreen'

import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const AppContainer = StackNavigator({
	Home: { 
			screen: Home,
			navigationOptions: ({navigation}) => ({
				header: null,
			}),  
		},
	ClockInScreen: { 
		screen: ClockInScreen,
		navigationOptions: ({navigation}) => ({
			header: null,
		}),
	},  
	ClockOutScreen: { 
		screen: ClockOutScreen,
		navigationOptions: ({navigation}) => ({
			header: null,
		}),
	},
	RoutesScreen: { 
			screen: RoutesScreen,
			navigationOptions: ({navigation}) => ({
				header: null,
			}),  
	},
	StartJobPinScreen: { 
			screen: StartJobPinScreen,
			navigationOptions: ({navigation}) => ({
				header: null,
			}),  
	},
});

function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, 
mapDispatchToProps)(AppContainer);