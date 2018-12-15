//1 import libraries
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      title:  'This is my LoginForm State Title, u stupid!'
    };
  }

  render(){
    return(
      <View style = {headerStyle.header}>
        <Text style ={headerStyle.txt1}>
          LoginForm Page!
        </Text>
      </View>
    );
  }
}


const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: 'yellow',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontSize: 19,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default
export default LoginForm;
