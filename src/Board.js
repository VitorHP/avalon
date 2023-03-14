
import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, FlatList } from 'react-native';
import AppContext from './lib/context';
import Characters from './lib/characters';

export default Board = ({ navigation }) => {
  const context = useContext(AppContext);
  const game = new Characters()

  const Item = ({ teamSize, round }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{round}</Text>
      <Text style={styles.cell}>{teamSize}</Text>
    </View>
  )

  const reset = () => {
    context.dispatch({ type: 'RESET' })
    navigation.popToTop()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Jogadores por Rodada</Text>
      <View style={styles.row}>
        <Text style={styles.cell}>Rodada</Text>
        <Text style={styles.cell}>Jogadores</Text>
      </View>
      <FlatList
        data={game.rounds(context.app.players)}
        renderItem={({ item, index }) => <Item teamSize={item} round={index + 1}/>}
      />
      <Text>{`Seed: ${context.app.seed}`}</Text>
    <Button
      title='Encerrar Partida'
      onPress={reset}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8
  },
  cell: {
    textAlign: 'center',
    fontSize: 20
  }
})