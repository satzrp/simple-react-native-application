import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Icon } from 'native-base'
import PropTypes from 'prop-types'

const ContactItem = props => {
  return (
    <View style={styles.contactItem}>
      <Icon style={styles.contactIcon} name={props.iconName} />
      <Text style={styles.contact}>{props.value}</Text>
    </View>
  )
}

ContactItem.propTypes = {
  iconName: PropTypes.string,
  value: PropTypes.string
}

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  contactIcon: {
    color: '#535353',
    width: 30,
    fontSize: 24
  },
  contact: {
    color: '#535353',
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 25
  }
})

export default ContactItem
