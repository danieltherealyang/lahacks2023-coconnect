import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../theme';

export default function SelectRoleScreen() {

  const handleTutorPress = () => {
    console.log('Tutor button pressed');
  };

  const handleTuteePress = () => {
    console.log('Tutee button pressed');
  };

  const handleBothPress = () => {
    console.log('Both button pressed');
  };

  const handleSubmit = () => {
    console.log('Submit button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 36, fontWeight: "bold", color: "white"}}>Hello, Amanda!</Text>
      <Text style={{fontSize: 28, fontWeight: "bold", color: "white", marginTop: "20%"}}>Are You a...</Text>
      <Image style={styles.areyou}
        source={require('../assets/AreYou.png')}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTutorPress}>
          <Text style={styles.buttonText}>Tutor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTuteePress}>
          <Text style={styles.buttonText}>Tutee</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBothPress}>
          <Text style={styles.buttonText}>Both!</Text>
        </TouchableOpacity></View>
      <View style={[styles.buttonContainer, {marginTop: "15%"}]}>
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
          <Text style={[styles.buttonText, styles.submitButtonText]}>Submit!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.turquoise
  },
  areyou: {
    width: "50%",
    resizeMode: 'contain'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: "80%"
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    flexGrow: 1
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  submitButton: {
    backgroundColor: 'black',
    marginTop: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
