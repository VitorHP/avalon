
import { useEffect } from 'react';
import { Alert } from 'react-native';
import Character from './Character';
import Board from './Board';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default Game = ({ navigation }) => {

  useEffect(() =>
    navigation.addListener('beforeRemove', (e) => {
      if (e.data.action.type !== "POP_TO_TOP") {
        e.preventDefault();

        Alert.alert(
          'Deseja sair da partida?',
          'A partida será descartada e você terá que escanear o QR Code novamente.',
          [
            { text: "Cancelar", style: 'cancel', onPress: () => {} },
            {
              text: 'Sair',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.popToTop(),
            },
          ]
        );
      }
    })
  )

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Você" component={Character} />
      <Tab.Screen name="Jogo" component={Board} />
      <Tab.Screen name="Code" component={Code} />
    </Tab.Navigator>
  );
}