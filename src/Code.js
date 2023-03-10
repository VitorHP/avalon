
import { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AppContext from './context';
import Game from './game';

export default NewGame = ({ navigation }) => {
  const context = useContext(AppContext);
  const game = new Game(context.app.players)
  const players = context.app.players.map(player => player.name)

  const code = {
    seed: context.app.seed,
    players: players,
    game: context.app.game
  }

  function start() {
    context.dispatch({ type: 'SET_PLAYERS', payload: game.sortCharacters(context.app.rules, context.app.seed) })
    navigation.navigate('Board', { players: context.app.players, seed: context.app.seed })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Jogadores escaneiam o QR Code</Text>
      <View style={styles.code}>
        <QRCode
          value={JSON.stringify(code)}
          size={300}
        />
      </View>
      <Button
        title="Iniciar"
        onPress={start}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginHorizontal: 16
  },
  title: {
    fontSize: 30,
    marginVertical: 16,
    textAlign: 'center'
  },
  code: {
    textAlign: 'center',
    alignSelf: 'center'
  }
})