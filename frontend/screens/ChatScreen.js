import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { Messages } from '../constants/Messages';
import { COLORS } from '../theme';
import MessageItem from '../components/MessageItem';

export default function ChatScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{margin: 20, fontSize: 24, color: "white", fontWeight: "bold"}}>Messages</Text>
      <SearchBar
        placeholder="Search messages..."
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        searchIcon={{ size: 24 }}
      />
      <ScrollView style={styles.dms} persistentScrollbar={true} horizontal={false}>
        {Messages.map((user, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {navigation.navigate("Messages")}}
            >
              <MessageItem
                pic={user.pic}
                title={user.title}
                message={user.message}
                time="30m"
                badge="Algebra 2"
                badgeColor="#FDE9E9"
                badgeTextColor="#CD3636"
              />
            </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.blue,
    alignItems: 'center'
  },
  searchBarContainer: {
    backgroundColor: COLORS.chatblue,
    opacity: "50%",
    paddingHorizontal: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 20,
    width: "80%",
    marginBottom: 20
  },
  searchBarInputContainer: {
    backgroundColor: "transparent",
    borderRadius: 20,
    height: 30,
  },
  searchBarInput: {
    fontSize: 16,
    fontWeight: 'normal',
    backgroundColor: "transparent"
  },
  dms: {
    width: "96%",
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 24,
    color: '#3F3F3F',
  },
  subtitle: {
    color: '#A5A5A5',
  },
});
