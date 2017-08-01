import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import JobBox from '../componet/JobBox'
import ClockIn from '../componet/ClockIn'
import getDirections from 'react-native-google-maps-directions'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';


class Home extends Component {

		constructor(props) {
			super(props)
			
		}
		componentWillMount(){
					   
		}

		routeInfo(data)
		{
			//change name to route when thats available
			var name = data.route.rteShortName;
			var Id = data.route.rteFK_trkID;
			if(name == undefined)
				{
					name = 'Default'
					Id = '0'
				}
			const { navigate } = data.navi;
			return(
				<TouchableOpacity onPress={() => navigate('RoutesScreen')}>
					<View>
						<Text style ={styles.TruckTextName} >{name}</Text>
						<Text style ={styles.TruckTextId}  >TRUCK {Id}</Text>
					</View>
				</TouchableOpacity>
			)
		}	

		render(){
			var navi = this.props.navigation;
			return(
			<View style = {{flex: 1, backgroundColor: 'white',}}>
				<View style = {styles.Title}>
					<View style = {styles.Truck}>
						<this.routeInfo navi = {navi} route={this.props.Route} />
					</View>
					<Image style = {styles.Logo} source = {require('../lib/vfc-logo.png')}/>
				</View>
				<View style = {{flexDirection: 'row',flex:9/10}}>
					<ScrollView style = {{flex: 2/3,}}>
						<JobBox navi = {navi}/>
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
	TruckTextName:
	{
		fontSize: 25,
		fontWeight: 'bold',
		color: 'limegreen'
	},
	TruckTextId:
	{
		fontSize: 20,
		fontWeight: 'bold',
		color: 'limegreen',
	},

	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {Route: state.Route}}, 
mapDispatchToProps)(Home);