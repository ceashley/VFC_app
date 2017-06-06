import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
} from 'react-native';


class ClockIn extends Component {
		
		onClick(){
			console.log('clockin clicked');
		}
		render(){
			return( 
				<View>
					<TouchableHighlight onPress={this.onClick}>
						<Text style = {styles.ClockInBox}>Clock In</Text>
					</TouchableHighlight>
				</View>);
		}
}
const styles = StyleSheet.create({
	
	ClockInBox: {
		fontSize: 20,
	},
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, mapDispatchToProps)(ClockIn);