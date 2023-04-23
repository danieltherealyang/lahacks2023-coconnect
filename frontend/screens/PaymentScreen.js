import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {COLORS} from '../theme';

export default function PaymentScreen({navigation}) {

  const [amount, setAmount] = useState('');
  const handleSend = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate("Messages")}} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            style={styles.profilePic}
            source={require('../assets/images/tutee/tutee1.jpg')}
          />
          <Image
            style={styles.badge}
            source={require('../assets/Coconut.png')}
          />
        </View>
        <View style={[styles.box, {backgroundColor: "#FDE9E9"}]}>
          <Text style={[styles.text, {color: "#CD3636", fontWeight: "bold"}]}>Algebra 2</Text>
        </View>
      </View>
      <Text style={styles.profileName}>Jenny Doe</Text>
      <Text style={styles.profileStatus}>Apr 22, 2023</Text>
      <View style={{width: "60%", alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 100, marginBottom: 20}}>
          <Text style={{ fontSize: 24, color: '#E4E4E4', fontWeight: 'bold', marginLeft: 20, marginRight: 20}}>$</Text>
          <TextInput
            style={{ fontSize: 24, flexGrow: 1, color: 'white', fontWeight: 'bold'}}
            placeholder="Enter amount"
            keyboardType="numeric"
            onChangeText={text => setAmount(text)}
            value={amount}
          />
        </View>
        <TouchableOpacity onPress={handleSend} style={{ backgroundColor: 'black', borderRadius: '20', width: '60%', alignItems: 'center', padding: 10, marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold"}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 0,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.turquoise,
    padding: 10,
    alignItems: 'center'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2
  },
  badge: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginLeft: -20,
    marginBottom: -5
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },
  profileStatus: {
    fontSize: 16,
    color: '#C4C4C4',
  },
});
