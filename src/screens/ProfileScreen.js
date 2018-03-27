import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Thumbnail, Text, Icon } from 'native-base'
import { View, StyleSheet } from 'react-native'

class ProfileScreen extends Component {
  static propTypes = {
    navigation: PropTypes.any
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#3E84C5',
        borderBottomWidth: 0
      },
      headerLeft: (
        <Icon
          style={styles.backButton}
          name="md-arrow-round-back"
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: <Icon style={styles.editButton} name="md-brush" />
    }
  }
  render () {
    const { params } = this.props.navigation.state
    const person = params.selectedPerson
    const capitalizeFirstChar = str => str.charAt(0).toUpperCase() + str.substring(1)
    const fullName =
      capitalizeFirstChar(person.name.first) + ' ' + capitalizeFirstChar(person.name.last)
    return (
      <Container>
        <Content>
          <View style={styles.topBar} />
          <View style={styles.generalInfo}>
            <Thumbnail
              large
              style={styles.avatar}
              source={{
                uri: person.picture.large
              }}
            />
            <View style={styles.infoView}>
              <View style={styles.info}>
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.mail}>{person.email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactView}>
            <Text style={styles.contactTitle}> Contact </Text>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="ios-pin" />
              <Text style={styles.contact}>
                {`${person.location.street}, \n${person.location.city}, ${person.location.state}, ${
                  person.location.postcode
                }`}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="ios-mail" />
              <Text style={styles.contact}>{person.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="ios-call" />
              <Text style={styles.contact}>{person.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="ios-phone-portrait" />
              <Text style={styles.contact}>{person.cell}</Text>
            </View>
          </View>
          <View style={styles.contactView}>
            <Text style={styles.contactTitle}> Social </Text>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="logo-facebook" />
              <Text style={styles.contact}>@facebook</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="logo-twitter" />
              <Text style={styles.contact}>@twitter</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="logo-whatsapp" />
              <Text style={styles.contact}>@whatsapp</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon style={styles.contactIcon} name="logo-instagram" />
              <Text style={styles.contact}>@instagram</Text>
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
    backgroundColor: '#3E84C5'
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
    height: 140,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: -60,
    borderRadius: 10,
    padding: 20,
    zIndex: -1,
    shadowColor: '#bfbfc3',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  info: {
    paddingTop: 45,
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 20
  },
  mail: {
    fontFamily: 'Avenir',
    color: '#535353',
    marginTop: 5
  },
  contactView: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    shadowColor: '#bfbfc3',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  contactTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 15,
    color: '#222'
  },
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
  },
  backButton: {
    color: '#FFF',
    marginLeft: 10
  },
  editButton: {
    color: '#FFF',
    marginRight: 15
  }
})

export default ProfileScreen
