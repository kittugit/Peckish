/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger  from 'redux-logger';

import reducer from './app/reducers';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState){
   const enhancer = compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware,),

    );

   return createStore(reducer, initialState, enhancer);

}

const store = configureStore({});


class Peckish extends Component {
  render() {
    return (
      <View>
        <Text>
            I'm Peckish!!!
        </Text>
        
      </View>
    );
  }
}
const App = () => (
    <Provider store={store}>
        <Peckish />
    </Provider>
  );

AppRegistry.registerComponent('Peckish', () => App);
