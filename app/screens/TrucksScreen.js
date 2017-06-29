import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Image,
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
    render(){
        return(
            <View>
            {this.TruckMap().map((truck) => {
				return(
					<View key={truck.Id}>
                        <Text>{truck.Name}</Text>
                        <Text>{truck.Id}</Text>				
					</View>
				);
			})}
            </View>
        );
    }
}


const styles = StyleSheet.create({

	
});
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {TruckList: state.TruckList}}, 
mapDispatchToProps)(TruckScreen);