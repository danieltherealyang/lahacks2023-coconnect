import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Mask from '../assets/Mask';
import { COLORS } from '../theme';

export default function SignupLoginScreen({ navigation }) {

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}>
        <Mask/>
      </ImageBackground>
      <Image style={styles.logo}
        source={require('../assets/Logo.png')}
      />
      <View style={styles.content}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccButton} onPress={handleSignup}>
          <Text style={styles.createAccButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.turquoise
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: "-50%"
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 200,
    height: 200,
    marginLeft: -100, // half of the width
    marginTop: -100, // half of the height
    resizeMode: "contain"
  },
  loginButton: {
    width: '80%',
    borderRadius: 15,
    marginTop: 8,
    padding: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createAccButton: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 15,
    marginTop: 8,
    marginBottom: "25%",
    padding: 10,
    borderColor: 'black',
    borderWidth: 2
  },
  createAccButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
