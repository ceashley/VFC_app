import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import JobBox from '../componet/JobBox'
import ClockIn from '../componet/ClockIn'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';


class Home extends Component {

		constructor(props) {
            super(props)
		}
		componentWillMount(){
			this.props.getTruck(0);
		}

		truckName(truck)
		{
			const { navigate } = truck.navi;
			return(
				<TouchableOpacity onPress={() => navigate('TrucksScreen')}>
					<View>
						<Text style ={styles.TruckText} >{truck.data.Name}</Text>
						<Text style ={styles.TruckText}  >TRUCK {truck.data.Id}</Text>
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
						<this.truckName data={this.props.Truck} navi = {navi} />
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
		fontSize: 20,
		fontWeight: 'bold',
	},

	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {Truck: state.Truck}}, 
mapDispatchToProps)(Home);