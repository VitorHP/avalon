
import { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AppContext from './lib/context';

export default Code = ({ navigation }) => {
  const context = useContext(AppContext);
  const players = context.app.players

  const code = {
    seed: context.app.seed,
    players: players,
    game: context.app.game,
    characters: context.characters
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.code}>
        <QRCode
          value={JSON.stringify(code)}
          size={300}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
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