import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base'

const PersonItem = props => {
  const capitalizeFirstChar = str =>
    str.charAt(0).toUpperCase() + str.substring(1)
  const fullName =
    capitalizeFirstChar(props.name.first) +
    ' ' +
    capitalizeFirstChar(props.name.last)
  const thumbnailSource = {
    uri: props.picture
  }
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail style={styles.avatar} source={thumbnailSource} />
      </Left>
      <Body>
        <Text style={styles.name}>{fullName}</Text>
        <Text note style={styles.meta}>
          {props.email}
        </Text>
      </Body>
    </ListItem>
  )
}

PersonItem.propTypes = {
  name: PropTypes.object,
  email: PropTypes.string,
  picture: PropTypes.string
}

const styles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48
  },
  name: {
    fontFamily: 'Avenir',
    fontSize: 16
  },
  meta: {
    fontFamily: 'Avenir',
    marginTop: 5
  }
})

export default PersonItem
