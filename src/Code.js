
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default NewGame = ({ navigation }) => {
  const data = {
    players: [
      { name: 'Vitor', character: 'Merlin' },
      { name: 'Lorena', character: 'Percival' },
      { name: 'Ingrid', character: 'Morgana' },
      { name: 'Ruan', character: 'Assassino' },
      { name: 'Renan', character: 'Minion' },
    ]
  }

  return (
    <SafeAreaView style={styles.container}>
       <QRCode
          value={JSON.stringify(data)}
          size={300}
        />
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
  }
})