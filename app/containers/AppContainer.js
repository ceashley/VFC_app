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
} from 'react-native';


class AppContainer extends Component {

		constructor(props) {
            super(props)
			this.props.makeJobArray();
		}
		render(){
			return(
			<View style = {{flexDirection: 'row',}}>
				<ScrollView style = {{flex: 2/3,}}>
					<JobBox />
				</ScrollView>
				<View style = {{flex: 1/3,}}>
					<ClockIn />
				</View>
			</View>
			);
		}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}}, 
mapDispatchToProps)(AppContainer);