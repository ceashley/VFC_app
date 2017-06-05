import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';


class ClockIn extends Component {

		render(){
			return <View style = {{flex:1}}>
				<Text style = {{flex:1}}>ClockIn</Text>
			</View>
		}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, mapDispatchToProps)(ClockIn);