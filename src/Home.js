import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import AppContext from './lib/context';
import { useContext } from 'react';

const Separator = () => <View style={styles.separator} />;

export default Home = ({ navigation }) => {
  const context = useContext(AppContext)

  const newGame = () => {
    context.dispatch({ type: 'NEW_GAME' })
    navigation.navigate('PlayersForm')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.button}
        title="Novo Jogo"
        onPress={() => newGame()}
      ></Button>
      <Separator />
      <Button
        style={styles.button}
        title="Ler QR Code"
        onPress={() => navigation.navigate('Camera')}
      ></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}