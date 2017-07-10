import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import {
  View,
  Text,  
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class TruckScreen extends Component {

    constructor(props) {
            super(props)
	}
    componentWillMount(){
			this.props.TruckArray();
	}
    TruckMap(){
			return Object.keys(this.props.TruckList).map(key => this.props.TruckList[key])
	}
    TruckClicked(id){
        this.props.getTruck(id);
        this.props.makeJobArray(id);
        const {goBack} = this.props.navigation;
        goBack();
    }
    render(){
        
        return(
            <View>
            {this.TruckMap().map((truck) => {
				return(
					<View  key={truck.Id}>                       
                        <TouchableOpacity style = {styles.truck} onPress={()=>this.TruckClicked(truck.Id)}>
                            <View>
                                <Text style = {styles.truckName}>{truck.Name}</Text>                        
                                <Text style = {styles.truckId}>TRUCK {truck.Id}</Text>
                            </View>
                        </TouchableOpacity>			
					</View>
				);
			})}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    truckName:{
        fontSize: 20,
        margin: 5,
    },
    truckId:{
        fontSize: 20,
        margin: 5,
    },
    truck:{
        borderColor: 'gray', 
		borderWidth: 1,
        margin: 3,
    }
	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {TruckList: state.TruckList,Truck: state.Truck}}, 
mapDispatchToProps)(TruckScreen);