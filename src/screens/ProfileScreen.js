import React, { Component } from 'react'
import { Container, Content, Thumbnail, Text } from 'native-base'
import { View, StyleSheet } from 'react-native'

class ProfileScreen extends Component {
  render () {
    return (
      <Container>
        <Content>
          <View style={styles.topBar} />
          <View style={styles.generalInfo}>
            <Thumbnail
              large
              style={styles.avatar}
              source={{
                uri: 'https://randomuser.me/api/portraits/women/60.jpg'
              }}
            />
            <View style={styles.infoView}>
              <View style={styles.info}>
                <Text style={styles.name}>Rosa Ramos</Text>
                <Text style={styles.mail}>eugenia.calvo@example.com</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: 75,
    backgroundColor: '#F37780'
  },
  generalInfo: {
    marginTop: -70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: 0,
    borderColor: '#FFF',
    borderWidth: 5,
    borderRadius: 50
  },
  infoView: {
    alignSelf: 'stretch',
    height: 150,
    backgroundColor: '#FFF',
    marginLeft: 15,
    marginRight: 15,
    marginTop: -60,
    borderRadius: 10,
    padding: 20,
    zIndex: -1
  },
  info: {
    paddingTop: 50,
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Avenir',
    fontSize: 20
  },
  mail: {
    fontFamily: 'Avenir',
    color: '#b3b3b3',
    marginTop: 10
  }
})

export default ProfileScreen
