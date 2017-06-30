import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

var UserList = [];

class ClockIn extends Component {
		
		constructor(props) {
            super(props)
			this.state ={
				navi: props.navi,
			};
			this.UsersClockinList = this.UsersClockinList.bind(this);
		}
		
		UsersClockinList(pin)
		{			
			const { navigate } = this.state.navi;

			var Pin = pin.data[0];
			for(var i = 1;i < pin.data.length;i++)
			{
				Pin += pin.data[i];
			}
			if(Pin != 'wrong pin' && Pin != undefined)
			{
				UserList.push(Pin);
				var Users = [];
				for(var i = 0; i < UserList.length; i++)
				{
					Users.push(
						<View key = {i}>
							<TouchableOpacity onPress={() => navigate('ClockOutScreen')}>
								<Text style = {styles.User}>{UserList[i]}</Text>
							</TouchableOpacity>
						</View>
					);
				}
				return(<View>{Users}</View>);
			}
			return null;
		}
		render(){
			const { navigate } = this.state.navi;
			return( 
				<View>
					<ScrollView>
						<this.UsersClockinList data = {this.props.Users} />
						<TouchableOpacity onPress={() => navigate('ClockInScreen')}>
							<Text style = {styles.ClockInBox}>Clock In</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>);
		}
}
const styles = StyleSheet.create({
	
	ClockInBox: {
		fontSize: 20,
	},
	User: {
		fontSize: 20,
	},
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {Users: state.Users}}, mapDispatchToProps)(ClockIn);