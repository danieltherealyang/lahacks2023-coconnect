import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme';
import Mask from '../assets/Mask';

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);

  const handleSignup = () => {
    // Perform sign up logic here
    // For example, send data to server or store data locally
    // Then navigate to the main screen
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}>
        <Mask/>
      </ImageBackground>
      <Image style={styles.logo}
        source={require('../assets/Logo.png')}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity style={styles.eyeToggle} onPress={() => setHidePassword(!hidePassword)}>
            <MaterialCommunityIcons
              name={hidePassword ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.createAccButton} onPress={handleSignup}>
        <Text style={styles.createAccButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.turquoise
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  logo: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    width: 120,
    height: 120,
    marginLeft: -60, // half of the width
    marginTop: -60, // half of the height
    resizeMode: "contain"
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 6,
    fontWeight: 'bold',
    color: 'white'
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    width: '100%',
    padding: 10,
    backgroundColor: 'white'
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    backgroundColor: 'white'
  },
  passwordInput: {
    flexGrow: 1,
    padding: 10,
    paddingRight: 35 // to account for the eye icon
  },
  createAccButton: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 15,
    marginTop: 8,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: '10%'
  },
  createAccButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eyeToggle: {
    marginRight: 10
  }
});
