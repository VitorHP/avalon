import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonList}>
        <Button style={styles.button} title="Novo Jogo" ></Button>
        <Separator/>
        <Button style={styles.button} title="Ler QR Code" ></Button>
        <StatusBar style="auto" />
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
  buttonList: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
  },
});
