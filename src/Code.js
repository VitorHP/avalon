
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default NewGame = ({ navigation, route }) => {
  const { params: data } = route;

  const code = {
    ...data,
    players: data.players.map(player => player.name)
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
        onPress={() => navigation.navigate('Code', { players: context.app.players, seed: context.app.seed })}
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