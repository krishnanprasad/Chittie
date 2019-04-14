import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator,createAppContainer } from 'react-navigation';
import Dashboard from './Tabs/Dashboard';
import Connection from './Tabs/Connection';
import Notification from './Tabs/Notification';
import Profile from './Tabs/Profile';

// class HomePage extends Component {
//     render() {
//         return (
//             <TabNavigator />
//         )
//     }
// }
const TabNavigator = createBottomTabNavigator({
    Dashboard:
    {
        screen: Dashboard
    },
    Connection: {
        screen: Connection
    },
    Notification: {
        screen: Notification
    },
    Profile: {
        screen: Profile
    }
    
})

const HomePage=createAppContainer(TabNavigator);
export default HomePage;
