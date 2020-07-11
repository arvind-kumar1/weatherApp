import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Logo from './Logo';

const Stack = createStackNavigator()
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
       <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
         <Stack.Screen name='Logo' component={Logo}/>
       </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
