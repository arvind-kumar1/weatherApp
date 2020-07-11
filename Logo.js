import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  getData(){
    let i = 0;
    y= 0;
    x = i + y;
    for(i=0;i<x;i++){
   x+=y;
    }
    this.setState({text:''})
  }

  render() {
    return (
      <View>
        <Text> Logo </Text>
      </View>
    );
  }
}
