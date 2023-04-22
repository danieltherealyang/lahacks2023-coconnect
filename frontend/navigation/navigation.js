import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTab} options={defaultScreenOptions}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={defaultScreenOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={defaultScreenOptions} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={defaultScreenOptions} />
    </Tab.Navigator>
  );
}

const defaultScreenOptions = {
  headerShown: false
};