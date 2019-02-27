import React, {Component} from 'react';
import {
  createStackNavigator, 
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import Main from './screens/main';

import DetailsScreen from './screens/Details';

const rootStack = createStackNavigator(
  {
  Home: Main,
  Details: DetailsScreen
  },{
  defaultNavigationOptions: {
      title: 'Home',

      headerStyle: {
        backgroundColor: '#0B486B'
      },

      headerTintColor: '#FFFFFF',

      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!'
    }
  }
)

const Tabs = createBottomTabNavigator ({ rootStack })
const AppContainer = createAppContainer(Tabs);

class App extends Component{
  render() {
    return (
        <AppContainer />
      );
  }
};

export default App;



