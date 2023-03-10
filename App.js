import { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appReducer, initialState } from './src/lib/reducer';
import AppContext from './src/lib/context';

import Home from './src/Home';
import PlayersForm from './src/PlayersForm';
import Code from './src/Code';
import Character from './src/Character';
import Player from './src/Player';
import Rules from './src/Rules';
import Board from './src/Board';

const Stack = createNativeStackNavigator();

export default function App() {
  const [app, dispatch] = useReducer(
    appReducer,
    initialState
  )

  return (
    <AppContext.Provider value={{ app, dispatch }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          ></Stack.Screen>
          <Stack.Screen
            name="PlayersForm"
            component={PlayersForm}
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
          <Stack.Screen
            name="Rules"
            component={Rules}
          ></Stack.Screen>
          <Stack.Screen
            name="Board"
            component={Board}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}