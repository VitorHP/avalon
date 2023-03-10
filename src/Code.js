
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useContext } from 'react';
import AppContext from './context';

export default NewGame = ({ navigation, route }) => {
  const { params: players } = route;
  const context = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <QRCode
        value={JSON.stringify(context.app.players)}
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