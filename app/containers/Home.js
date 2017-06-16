import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import JobBox from './JobBox'
import ClockIn from './ClockIn'
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';


class Home extends Component {

		constructor(props) {
            super(props)
		}
		render(){
			var navi = this.props.navigation;
			return(
			<View style = {{flex: 1}}>
				<View style = {styles.Title}>
					<View style = {styles.Truck}>
						<Text style ={styles.TruckText} >FRESNO 2</Text>
						<Text style ={styles.TruckText}  >TRUCK 28</Text>
					</View>
					<Image style = {styles.Logo} source = {require('../lib/vfc-logo.png')} />
				</View>
				<View style = {{flexDirection: 'row',flex:9/10}}>
					<ScrollView style = {{flex: 2/3,}}>
						<JobBox />
					</ScrollView>
					<View style = {{flex: 1/3,}}>
						<ClockIn navi = {navi}/>
					</View>
				</View>
			</View>
			);
		}
}

const styles = StyleSheet.create({
	
	Title:
	{
		flex: 1/10,
		flexDirection: "row",
		alignItems: 'center',
		margin: 5,
	},	
	Logo:
	{
		flex: 1,
		resizeMode: 'contain',
		
	},
	Truck:
	{
		flexDirection: 'column',
		flex:1,
	},
	TruckText:
	{
		fontSize: 20
	},

	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, 
mapDispatchToProps)(Home);