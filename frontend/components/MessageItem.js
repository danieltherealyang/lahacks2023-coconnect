import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../theme';

const MessageItem = ({ pic, title, message, time, badge, badgeColor, badgeTextColor }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={pic} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message} numberOfLines={1}>{message}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={[styles.badge, {backgroundColor: badgeColor}]}>
          <Text style={[styles.badgeText, {color: badgeTextColor}]}>{badge}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.chatblue,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#8E8E93',
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: "100%"
  },
  time: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default MessageItem;
