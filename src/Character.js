
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default Character = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.player}>PlayerName</Text>
      <Text style={styles.character}>Percival</Text>
      <Separator/>
      <Text style={styles.power}>Ruan e Lorena aparecem como Merlin pra você</Text>
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
    fontSize: 20
  },
  separator: {
    marginVertical: 100,
    fontSize: 20
  }
});