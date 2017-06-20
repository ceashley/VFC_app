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
		
		constructor(props) {
            super(props)
			this.state ={navi: props.navi};
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
		render(){
			const { navigate } = this.state.navi;
			return( 
				<View>
					<this.TestFunc data = {this.props.Pins} />
					<TouchableHighlight onPress={() => navigate('ClockInScreen')}>
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

export default connect((state) => {return {Pins: state.Pins}}, mapDispatchToProps)(ClockIn);