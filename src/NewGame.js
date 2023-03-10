
import { StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import { View, Button, SafeAreaView, TextInput, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import AppContext from './context';

export default NewGame = ({ navigation }) => {
  const [player, setPlayer] = useState('');

  const Item = ({ player, index }) => (
    <View style={newGame.item} key={index}>
      <Text>{player.name}</Text>
      <Button
        title="X"
        onPress={() => removePlayer(index)}></Button>
    </View>
  );

  const context = useContext(AppContext);

  const addPlayer = () => {
    context.dispatch({ type: 'ADD_PLAYER', payload: player });
    setPlayer('');
  }

  const removePlayer = (index) => {
    context.dispatch({ type: 'REMOVE_PLAYER', payload: index });
  }

  return (
    <SafeAreaView style={newGame.container}>
      <View style={newGame.form}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPlayer}
          onSubmitEditing={addPlayer}
          value={player}
          blurOnSubmit={false}
        />
        <Button
          style={styles.button} 
          title="Adicionar"
          onPress={addPlayer}
        ></Button>
      </View>

      <View style={newGame.list}>
        <Text style={newGame.title}>Jogadores</Text>
        <FlatList
          data={context.app.players}
          renderItem={({ item, index }) => <Item player={item} index={index}/>}
          keyExtractor={item => item.player}
        />
      </View>


      <Button
        style={newGame.startButton}
        title="Avançar"
        disabled={context.app.players.length < 5}
        onPress={() => navigation.navigate('Rules')}
      ></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const newGame = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    paddingVertical: 16
  },
  list: {
    flexGrow: 2
  },
  title: {
    fontSize: 20,
    marginVertical: 16,
    textAlign: 'center'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  startButton: {
    alignSelf: 'flex-end'
  }
});
