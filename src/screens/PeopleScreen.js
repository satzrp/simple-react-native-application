import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Content, List } from 'native-base'
import PersonItem from './../components/PersonItem'
import { fetchPeople } from './../data/people/PeopleActions'

class PeopleScreen extends Component {
  static navigationOptions = {
    title: 'People'
  }
  static propTypes = {
    fetchPeople: PropTypes.func,
    people: PropTypes.array
  }
  getPersonItem ({ name, email, picture }) {
    return (
      <PersonItem
        key={email}
        name={name}
        email={email}
        picture={picture.thumbnail}
      />
    )
  }
  componentDidMount () {
    this.props.fetchPeople()
  }
  render () {
    let personItems = ''
    if (this.props.people !== undefined) {
      console.log(this.props.people)
      personItems = this.props.people.map(person => this.getPersonItem(person))
    }
    return (
      <Container>
        <Content>
          <List>{personItems}</List>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.peopleState.people
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleScreen)
