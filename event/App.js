import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Eventlist from './Eventlist';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Eventform from './Eventform';

const Applicationstack = createStackNavigator({
      Home: {
        screen: Eventlist,
        navigationoption: () =>{
          title: 'Your Events'
        }
      },
      Form: {
        screen: Eventform,
        navigationoption: () => {
          title: 'Add New Events'
        }
      },
    }, {
        initialRouteName: 'Home',
    });

export default createAppContainer(Applicationstack);
