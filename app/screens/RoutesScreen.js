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

class RouteScreen extends Component {

    constructor(props) {
            super(props)
	}
    componentWillMount(){
			this.props.RouteArray();
	}
    RouteMap(){
            return Object.keys(this.props.RouteList).map(key => this.props.RouteList[key])  	
	}
    RouteClicked(route){
        console.log(route);
        this.props.getRoute(route.rteID);
        this.props.getTruck(route.rteFK_trkID);
        this.props.makeJobArray(route.rteFK_trkID);
        const {goBack} = this.props.navigation;
        goBack();
    }
    render(){
        //change the trkShortName to the route when that is available
        if(this.props.RouteList[0] == undefined)
            {
                return(<View><Text>Loading...</Text></View>)
            }
        return(
            <View style={{flex: 1}}>
                <ScrollView style = {styles.RouteScroll}>                    
                    {this.RouteMap().map((Route) => {                        
                        return(
                            <View  key={Route.rteID}>                                                     
                                    <TouchableOpacity style = {styles.Route} onPress={()=>this.RouteClicked(Route)}>
                                        <View>
                                            <Text style = {styles.RouteName}>{Route.rteShortName}</Text>                        
                                            <Text style = {styles.RouteId}>Truck {Route.rteFK_trkID}</Text>
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
    RouteName:{
        fontSize: 20,
        margin: 5,
    },
    RouteId:{
        fontSize: 20,
        margin: 5,
    },
    Route:{
        borderColor: 'gray', 
		borderWidth: 1,
        margin: 3,
    },
    RouteScroll:{
        margin: 5,
    },
	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {RouteList: state.RouteList,Route: state.Route}}, 
mapDispatchToProps)(RouteScreen);