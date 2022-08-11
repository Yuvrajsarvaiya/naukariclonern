import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Applies" component={Applies} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function Applies() {
  return (
    <View>
      <Text>Applies</Text>
    </View>
  );
}

function Inbox() {
  return (
    <View>
      <Text>Inbox</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
