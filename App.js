import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigation } from 'react-navigation'
import LoginPage from './Pages/Loginpage';
import HomePage from './Pages/Home/Homeindex';
class App extends Component {
  render() {
    return <AppContainer />;
  }
};

const AppContainer= createStackNavigation({
  Login: {screen:LoginPage},
  Home: {screen:HomePage}
},
  {
    initialRouteName: "Login"
  }
);