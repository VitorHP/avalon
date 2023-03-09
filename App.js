import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import NewGame from './src/NewGame';
import Code from './src/Code';
import Character from './src/Character';
import Player from './src/Player';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        ></Stack.Screen>
        <Stack.Screen
          name="NewGame"
          component={NewGame}
        ></Stack.Screen>
        <Stack.Screen
          name="Code"
          component={Code}
        ></Stack.Screen>
        <Stack.Screen
          name="Character"
          component={Character}
        ></Stack.Screen>
        <Stack.Screen
          name="Player"
          component={Player}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}