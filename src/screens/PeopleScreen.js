import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'
import PersonItem from './../components/PersonItem'

class PeopleScreen extends Component {
  static navigationOptions = {
    title: 'People'
  }
  render () {
    return (
      <Container>
        <Content>
          <List>
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
          </List>
        </Content>
      </Container>
    )
  }
}

export default PeopleScreen
