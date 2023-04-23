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

         <View style={styles.classesContainer}>
        <TouchableOpacity style={styles.classesOne}>
          <Text style={styles.classesTextOne}>Intro Korean</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.classesTwo} >
          <Text style={styles.classesTextTwo}>Chinese 101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.classesThree} >
          <Text style={styles.classesTextThree}>CS69</Text>
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
  classesOne: {
    backgroundColor: '#fde9e9',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    padding: (4,10),
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
  },
  classesTwo: {
    backgroundColor: '#d9f9e6',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    padding: (4,10),
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
  },
  classesThree: {
    backgroundColor: '#fbf2cb',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  classesTextOne: {
    color: '#cd3636',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  classesTextTwo: {
    color: '#2f9461',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  classesTextThree: {
    color: '#c8811a',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  classesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: "90%"
  },
})

export default ProfileScreen