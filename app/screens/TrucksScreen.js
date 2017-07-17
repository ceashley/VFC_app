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
            var thing = Object.keys(this.props.TruckList).map(key => this.props.TruckList[key])
            console.log(thing);            
			return thing;
	}
    TruckClicked(id){
        this.props.getTruck(id);
        this.props.makeJobArray(id);
        const {goBack} = this.props.navigation;
        goBack();
    }
    render(){
        //change the trkShortName to the route when that is available
        return(
            <View style={{flex: 1}}>
                <ScrollView style = {styles.truckScroll}>
                    {this.TruckMap().map((truck) => {
                        return(
                            <View  key={truck.trkID}>                                                     
                                    <TouchableOpacity style = {styles.truck} onPress={()=>this.TruckClicked(truck.trkID)}>
                                        <View>
                                            <Text style = {styles.truckName}>{truck.trkShortName}</Text>                        
                                            <Text style = {styles.truckId}>TRUCK {truck.trkNumber}</Text>
                                        </View>
                                    </TouchableOpacity>                                		
                            </View>
                        );
                    })}
                </ScrollView>
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
    },
    truckScroll:{
        margin: 5,
    },
	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {TruckList: state.TruckList,Truck: state.Truck}}, 
mapDispatchToProps)(TruckScreen);