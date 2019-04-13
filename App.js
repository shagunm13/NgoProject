import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './HomeScreen'
import Ngo from './Ngo'

export default class App extends React.Component {

  render() {

    return (
      <AppContainer />
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Ngo: {
      screen: Ngo
    }
  },
  {
    initialRouteName: 'Home',
  });

const AppContainer = createAppContainer(AppNavigator);



