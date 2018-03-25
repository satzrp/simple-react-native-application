import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import PeopleScreen from './src/screens/PeopleScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import Store from './src/data/configureStore'

const AppNavigator = StackNavigator(
  {
    People: {
      screen: PeopleScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'Profile',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F37780',
        borderBottomWidth: 0
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

export default class App extends Component {
  render () {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    )
  }
}
