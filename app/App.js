import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Header from './Header.js';
import LoginForm from './LoginForm.js';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home-Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({

  //Home: HomeScreen,
  Header: Header,
  LoginForm: LoginForm
  },
);

export default createAppContainer(AppNavigator);



// Un-comment starting here
/*
import React, {Component} from 'react';
import AppNavigator from './AppNavigator.js';

//import {View, Text} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import createAppContainer(AppNavigator) from './AppNavigator.js';




//const AppContainer = createAppContainer(AppNavigator);
//   return <AppContainer />;
 class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
*/
