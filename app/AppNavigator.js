
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Header from './Header.js';
import LoginForm from './LoginForm.js';
import App from './App.js';

/*
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home-Navigator Screen</Text>
      </View>
    );
  }
}
*/

const AppNavigator = createStackNavigator(
  {
  //Home: HomeScreen,
  Header: Header,
  LoginForm: LoginForm
  },
  //{
  //  initialRouteName: "Home"
  //}
);

export default AppNavigator;
//export default createAppContainer(AppNavigator);
