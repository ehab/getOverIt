
/*
import React, {Component} from 'react';
import RootNavigator from './RootNavigator.js';
import createAppContainer from './RootNavigator.js';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
*/

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

/*class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}*/

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
