
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Header from './Header.js';
import LoginForm from './LoginForm.js';




const AppNavigator = createStackNavigator({
  Home: {
    screen: Header
  },
  Login: {
    screen: LoginForm
  },

});

export default createAppContainer(AppNavigator);
