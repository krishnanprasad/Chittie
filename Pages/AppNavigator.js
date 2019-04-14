import React, { Component } from 'react'
import { createStackNavigation } from 'react-navigation'
import HomePage from './HomePage';
import LoginPage from './LoginPage';



const AppNavigator= createStackNavigation({
    Login:LoginPage,
    Home:HomePage,
  },
  );

  export default AppNavigator;