
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import { useContext } from 'react';
import AppContext from './lib/context';
import { shuffle } from 'shuffle-seed';

export default Player = ({ navigation }) => {
  const context = useContext(AppContext);

  const selectPlayer = (player) => {
    context.dispatch({ type: 'SET_CURRENT_PLAYER', payload: player })
    navigation.navigate('Game')
  }

  const Item = ({ player: { name }, index }) => (
    <View style={styles.item} key={index}>
      <Button title={name} onPress={() => selectPlayer(name)}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha seu nome</Text>
      <FlatList
        data={shuffle(context.app.players, context.app.seed)}
        renderItem={({ item, index }) => <Item player={item} index={index}/>}
        keyExtractor={item => item.name}
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