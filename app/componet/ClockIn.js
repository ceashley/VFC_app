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

var UserArray = [];

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
			var user = pin.data;
			if(user.Name == undefined)
			{
				return null;
			}	
			UserArray[user.Name] = user;
			var UserList = [];
			const { navigate } = this.state.navi;
			Object.keys(UserArray).forEach(function(key) {
				if(UserArray[key].Status != 'out')
				{
					UserList.push(	
							<View key={key}>
								<TouchableOpacity style = {styles.UserPress}  onPress={() => navigate('ClockOutScreen')}>
									<Text style = {styles.User}>{UserArray[key].Name}</Text>
								</TouchableOpacity>
							</View>
						);
				}
			});
			return (<View>{UserList}</View>);
		}
		render(){
			const { navigate } = this.state.navi;
			return( 
				<View style ={styles.ClockinList}>
					<ScrollView >
						<this.UsersClockinList data = {this.props.Users} />
						<TouchableOpacity style ={styles.ClockInPress} onPress={() => navigate('ClockInScreen')}>
							<Text style = {styles.ClockInBox}>Clock In</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>);
		}
}
const styles = StyleSheet.create({
	
	ClockInBox: {
		fontSize: 40,
	},
	User: {
		fontSize: 40,
		textAlign: 'center',
	},
	UserPress: {
		backgroundColor: 'lightgreen',
		borderRadius: 5,
		margin: 2,
	},
	ClockinList:{
		alignItems: 'center',
		margin: 2,
	},
	ClockInPress:{
		backgroundColor: 'lightblue',
		borderRadius: 5,
		margin: 2,
	},
	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {Users: state.Users}}, mapDispatchToProps)(ClockIn);