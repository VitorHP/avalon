
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import Characters from './lib/characters';
import { useContext } from 'react';
import AppContext from './lib/context';

const Separator = () => <View style={styles.separator} />;

export default Character = ({ navigation }) => {
  const context = useContext(AppContext);
  const characters = new Characters();
  const character = characters.find(context.app.players.find((item) => item.name === context.app.currentPlayer).character)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.player}>{context.app.currentPlayer}</Text>
      <Text style={styles.character}>{character.name}</Text>
      <Text style={styles.power}>{`Você é do time do ${character.team === 'good' ? 'Bem' : 'Mal'}`}</Text>
      <Separator />
      <Text style={styles.power}>{character.power(context.app.players)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16
  },
  player: {
    color: 'grey',
    fontSize: 20
  },
  character: {
    fontWeight: 'bold',
    fontSize: 30
  },
  power: {
    fontSize: 20,
    marginHorizontal: 16
  },
  separator: {
    marginVertical: 100,
    fontSize: 20
  }
});