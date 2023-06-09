import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme';
import Mask from '../assets/Mask';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);

  const handleLogin = () => {
    navigation.navigate('BottomTab');
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.blue
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
    borderColor: 'black',
    borderRadius: 15,
    width: '100%',
    padding: 10,
    backgroundColor: "white"
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: "white"
  },
  passwordInput: {
    flexGrow: 1,
    padding: 10,
    paddingRight: 35
  },
  loginButton: {
    width: '80%',
    borderRadius: 15,
    marginTop: 8,
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: "40%"
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eyeToggle: {
    marginRight: 10
  }
});
