import React from 'react'
import { Image, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics } from '../constants/Pics'
import { randomNo } from '../utils/randomNo' //####Remove after connecting with database


const { pic, title } = HomeScreenPics[randomNo(1, HomeScreenPics.length)]

const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
)

class ProfileScreen extends React.Component {
  render() {
    return (
      //* Profile Card Content *//
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image} />
        </View>

        <Text h4 style={styles.name}>
          {title}
        </Text>
        <Text style={styles.desc}>Sophomore at UCLA</Text>
        <Divider style={styles.divider} />
         
         {/* Profile Attributes */}

         <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Intro Korean</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Chinese 101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>CS69</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.desc}>
          I am a scholar, i have 30 hours of coaching
        </Text>
        <Divider style={styles.divider} />

        <Text style={styles.desc}>Catch me below</Text>
        <View style={styles.socialLinks}>
          <Social name="linkedin" />
          <Social name="instagram" />
          <Social name="facebook-square" />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  attribute: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  }
})

export default ProfileScreen