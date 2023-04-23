import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {COLORS} from '../theme';

const MessageBubble = ({ text, align }) => {
  const bubbleStyles = [
    styles.bubble,
    align === 'right' && styles.bubbleRight,
  ];
  const textStyles = [
    styles.bubbleText,
    align === 'right' && styles.bubbleTextRight,
  ];
  return (
    <View style={bubbleStyles}>
      <Text style={textStyles}>{text}</Text>
    </View>
  );
};

export default function MessageScreen({navigation}) {
  const [messageBubbles, setMessageBubbles] = useState([
    { text: "12 o' Clock at starbucks? Calculus 3 right?", align: 'left' },
    { text: 'yea! How much do I owe you?', align: 'right' },
    { text: "Don't worry about it, you can get me coffee next time", align: 'left' },
    { text: "omg, thanks", align: 'right' },
  ]);

  const addMessage = (text) => {
    setMessageBubbles([
      ...messageBubbles,
      { text, align: 'right' },
    ]);
  };

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate("BottomTab")}} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Payment")}} style={styles.profile}>
          <Image
            style={styles.profilePic}
            source={require('../assets/images/tutee/tutee1.jpg')}
          />
          <Image
            style={styles.badge}
            source={require('../assets/Coconut.png')}
          />
        </TouchableOpacity>
        <View style={[styles.box, {backgroundColor: "#FDE9E9"}]}>
          <Text style={[styles.text, {color: "#CD3636", fontWeight: "bold"}]}>Algebra 2</Text>
        </View>
      </View>
      <Text style={styles.profileName}>Jenny Doe</Text>
      <Text style={styles.profileStatus}>Apr 22, 2023</Text>
      <View style={styles.messages}>
        {messageBubbles.map((message, index) => (
          <MessageBubble key={index} text={message.text} align={message.align} />
        ))}
      </View>
      <KeyboardAvoidingView behavior="position" style={{width: "96%"}}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBubble}>
            <TextInput style={styles.input} placeholder="Type a message..." value={text} onChangeText={(value) => setText(value)} />
          </View>
          <TouchableOpacity style={{marginRight: 20}} onPress={() => {addMessage(text); setText('');}}>
            <MaterialIcons name="send" size={24} color={COLORS.blue} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  messages: {
    width: "100%",
    flexDirection: "column",
    flexGrow: 1
  },
  bubble: {
    maxWidth: '70%',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#255E7C',
  },
  bubbleRight: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
  },
  bubbleText: {
    fontSize: 16,
    color: 'white'
  },
  bubbleTextRight: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
  },
  inputBubble: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexGrow: 1,
    height: 60,
    margin: 0,
  },
  input: {
    fontSize: 16,
    maxWidth: "100%"
  },
});
