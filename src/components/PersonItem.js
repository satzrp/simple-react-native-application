import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base'

const PersonItem = props => {
  const thumbnailSource = {
    uri: props.picture
  }
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail style={styles.avatar} source={thumbnailSource} />
      </Left>
      <Body>
        <Text>{props.email}</Text>
        <Text note style={styles.meta}>
          {props.email}
        </Text>
      </Body>
    </ListItem>
  )
}

PersonItem.propTypes = {
  email: PropTypes.string,
  picture: PropTypes.string
}

const styles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48
  },
  meta: {
    marginTop: 5
  }
})

export default PersonItem
