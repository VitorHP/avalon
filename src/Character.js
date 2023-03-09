
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import Game from './game';

const Separator = () => <View style={styles.separator} />;

export default Character = ({ navigation, route }) => {
  const { params: { player, data: { players} } } = route;
  const game = new Game(players)
  const character = game.character(players.find((item) => item.name === player).character)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.player}>{player}</Text>
      <Text style={styles.character}>{character.name}</Text>
      <Text style={styles.power}>{`Você é do time do ${character.team === 'good' ? 'Bem' : 'Mal'}`}</Text>
      <Separator/>
      <Text style={styles.power}>{character.power()}</Text>
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