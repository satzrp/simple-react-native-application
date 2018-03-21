import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base'

const PersonItem = () => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail
          style={styles.avatar}
          source={{
            uri: 'https://randomuser.me/api/portraits/thumb/men/25.jpg'
          }}
        />
      </Left>
      <Body>
        <Text>Sathish Kumar</Text>
        <Text note style={styles.meta}>
          sathish@gmail.com
        </Text>
      </Body>
    </ListItem>
  )
}

export default PersonItem

const styles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48
  },
  meta: {
    marginTop: 5
  }
})
