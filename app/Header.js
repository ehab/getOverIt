//1 import libraries
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

//2 build/render component
//Props Case1
//{this.props.children}
//Props Case2

class Header extends Component {
  constructor(){
    super();
    this.state = {
      title:  'This is my Header State Title, u stupid!'
    };
  }

  render(){
    return(
      <View style = {headerStyle.header}>
        <Text style ={headerStyle.txt1}>
          {this.state.title}
        </Text>
      </View>
    );
  }
}

//{this.props.title1} when using props

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
// export component to available for other components
export default Header;
