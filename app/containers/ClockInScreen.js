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

import {
	 StackNavigator,
	 NavigationActions,
} from 'react-navigation';

class ClockInScreen extends Component {

		constructor(props) {
            super(props)
		}
		render(){
			const {goBack} = this.props.navigation;
			return(
				<View>
					<TouchableHighlight onPress={() => goBack()}>
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