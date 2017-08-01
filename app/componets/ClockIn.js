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
			console.log(user);
			if(user.Name == undefined)
			{
				return null;
			}	
			UserArray[user.Name] = user;
			var UserList = [];
			const { navigate } = this.state.navi;
			Object.keys(UserArray).forEach(function(key) {
				if(UserArray[key].Status == 'in')
				{
					UserList.push(	
							<View key={key}>
								<TouchableOpacity style = {styles.UserPress}  onPress={() => navigate('ClockOutScreen')}>
									<Text style = {styles.User}>{UserArray[key].Name}</Text>
								</TouchableOpacity>
							</View>
						);
				}
				else if(UserArray[key].Status == 'out')
				{
					UserList.push(	
							<View key={key}>
								<TouchableOpacity style = {[styles.UserPress,{backgroundColor: 'grey'}]}  onPress={() => navigate('ClockInScreen')}>
									<Text style = {styles.User}>{UserArray[key].Name}</Text>
								</TouchableOpacity>
							</View>
						);
				}
				else if(UserArray[key].Status == 'break')
				{
					UserList.push(	
							<View key={key}>
								<TouchableOpacity style = {[styles.UserPress,{backgroundColor: 'goldenrod'}]}  onPress={() => navigate('ClockInScreen')}>
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
							<Text style = {styles.ClockInText}>Clock In</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>);
		}
}
const styles = StyleSheet.create({
	
	ClockinList:{
		alignItems: 'stretch',
		margin: 2,
		flex: 1,
	},		
	ClockInPress:{
		backgroundColor: 'deepskyblue',
		borderRadius: 5,
		margin: 2,
		padding: 6,
	},
	ClockInText: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		color:'white',
	},
	UserPress: {
		backgroundColor: 'limegreen',
		borderRadius: 5,
		margin: 2,
		padding: 6,	
			
	},
	User: {
		fontSize: 25,
		textAlign: 'center',
		fontWeight: 'bold',
		color:'white',
	},
	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {Users: state.Users}}, mapDispatchToProps)(ClockIn);