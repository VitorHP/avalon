
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default Character = ({ navigation, route }) => {
  const data = {
    players: [
      { name: 'Vitor', character: 'Merlin' },
      { name: 'Lorena', character: 'Percival' },
      { name: 'Ingrid', character: 'Morgana' },
      { name: 'Ruan', character: 'Assassino' },
      { name: 'Renan', character: 'Minion' },
    ]
  }

  const Item = ({ player: { name } }) => (
    <View style={styles.item}>
      <Button title={name} onPress={() => navigation.navigate('Character', { player: name, data })}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha seu nome</Text>
      <FlatList
        data={data.players}
        renderItem={({ item }) => <Item player={item}/>}
        keyExtractor={item => item.player}
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
  },
  title: {
    fontSize: 32,
    padding: 20
  },
  item: {
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 100,
    fontSize: 20
  }
});