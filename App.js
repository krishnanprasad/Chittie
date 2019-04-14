import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginPage from './Screens/LoginPage';
import HomePage from './Screens/HomePage';
// export default class App extends React.Component {
//   render() {
//     return (
      
//         <AppNavigator />
      
//     );
//   }
// }

const AppNavigator=createStackNavigator({
  Login:
  {
    screen:LoginPage
  },
  Home:{
    screen: HomePage
  }
})
const App=createAppContainer(AppNavigator);
export default App;
