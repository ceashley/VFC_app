/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'
import AppContainer from './app/screens/AppContainer'

const loggerMiddleware = createLogger({predicat:(getState,action) => __DEV__});
function configureStore(initialState) {
	const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware,),);
	return createStore(reducer,initialState,enhancer);
}

const store = configureStore({});

import {
  AppRegistry,
} from 'react-native';



const App = () => (
<Provider store={store}>
	<AppContainer />
</Provider>
);

AppRegistry.registerComponent('VFC_app', () => App);
