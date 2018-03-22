import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import PeopleScreen from './src/screens/PeopleScreen'
import Store from './src/data/configureStore'

const AppNavigator = StackNavigator({
  People: {
    screen: PeopleScreen
  }
})

export default class App extends Component {
  render () {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    )
  }
}
