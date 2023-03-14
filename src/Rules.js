
import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import { View, Button, SafeAreaView, Text, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppContext from './lib/context';
import Setup from './lib/setup';
import Characters from './lib/characters';

export default Rules = ({ navigation }) => {
  const context = useContext(AppContext);

  const setCharacter = (character, value) => {
    context.dispatch({ type: 'SET_CHARACTER', payload: { character, value } });
  }

  const Rule = ({ label, character }) => (
    <View style={styles.character}>
      <Text style={styles.characterLabel}>{label}</Text>
      <Switch
        onValueChange={() => setCharacter(character, !context.app.characters[character])}
        value={context.app.characters[character]}
      />
    </View>
  )

  function start() {
    const setup = new Setup()
    const characters = new Characters()

    context.dispatch({ type: 'SET_PLAYERS', payload: setup.sort(context.app.players, characters.all(), context.app.characters, context.app.seed + context.app.game) })
    navigation.navigate('Player')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Rule label="Usar Merlin" character='merlin'></Rule>
        <Rule label="Usar Assassino" character='assassin'></Rule>
        <Rule label="Usar Percival" character='percival'></Rule>
        <Rule label="Usar Morgana" character='morgana'></Rule>
        <Rule label="Usar Oberon" character='oberon'></Rule>
        <Rule label="Usar Mordred" character='mordred'></Rule>
      </View>

      <Button
        title="Start"
        onPress={start}
      ></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingVertical: 16
  },
  rule: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8
  },
  ruleLabel: {
    fontSize: 20
  }
});
