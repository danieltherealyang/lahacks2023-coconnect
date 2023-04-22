import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);

  const handleLogin = () => {
    navigation.navigate('BottomTab');
  };

  return (
    <View style={styles.container}>
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
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 6,
    fontWeight: 'bold',
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
    padding: 10
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
  passwordInput: {
    flexGrow: 1,
    padding: 10,
    paddingRight: 35 // to account for the eye icon
  },
  loginButton: {
    width: '80%',
    borderRadius: 15,
    marginTop: 8,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2
  },
  loginButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eyeToggle: {
    marginRight: 10
  }
});
