import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import PeopleScreen from './src/screens/PeopleScreen'

const AppNavigator = StackNavigator({
  People: {
    screen: PeopleScreen
  }
})

export default class App extends Component {
  render () {
    return <AppNavigator />
  }
}
