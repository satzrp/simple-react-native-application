import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base'

const PersonItem = props => {
  let { name, email, picture } = props.person
  const capitalizeFirstChar = str => str.charAt(0).toUpperCase() + str.substring(1)
  const fullName = capitalizeFirstChar(name.first) + ' ' + capitalizeFirstChar(name.last)
  const thumbnailSource = {
    uri: picture.thumbnail
  }
  return (
    <ListItem
      avatar
      onPress={() =>
        props.navigation.navigate('Profile', {
          selectedPerson: props.person
        })
      }
    >
      <Left>
        <Thumbnail style={styles.avatar} source={thumbnailSource} />
      </Left>
      <Body>
        <Text style={styles.name}>{fullName}</Text>
        <Text note style={styles.meta}>
          {email}
        </Text>
      </Body>
    </ListItem>
  )
}

PersonItem.propTypes = {
  person: PropTypes.object,
  navigation: PropTypes.any
}

const styles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48
  },
  name: {
    fontSize: 16
  },
  meta: {
    marginTop: 5
  }
})

export default PersonItem
