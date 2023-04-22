import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SolidHeartIcon from '../components/icons/SolidHeart';
import ChatBubbleLeftRight from '../components/icons/ChatBubbleLeftRight';
import User from '../components/icons/User';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={defaultScreenOptions}/>
        
        <Stack.Screen name="BottomTab" component={BottomTab} options={defaultScreenOptions}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen name="Chat" component={ChatScreen} options={defaultScreenOptions}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={defaultScreenOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

function BottomTab() {
  const iconSize = 25;
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{...{tabBarIcon: ({color}) => <SolidHeartIcon color={color} size={iconSize}/>}, ...defaultScreenOptions}} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{...{tabBarIcon: ({color}) => <ChatBubbleLeftRight color={color} size={iconSize}/>}, ...defaultScreenOptions}} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{...{tabBarIcon: ({color}) => <User color={color} size={iconSize}/>}, ...defaultScreenOptions}} />
    </Tab.Navigator>
  );
}

const defaultScreenOptions = {
  headerShown: false
};