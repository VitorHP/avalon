
import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import { View, Button, SafeAreaView, Text, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppContext from './lib/context';
import GameLogic from './lib/gameLogic';

export default Rules = ({ navigation }) => {
  const context = useContext(AppContext);
  const game = new GameLogic(context.app.players)

  const setRule = (rule, value) => {
    context.dispatch({ type: 'SET_RULES', payload: { rule, value } });
  }

  const Rule = ({ label, rule }) => (
    <View style={styles.rule}>
      <Text style={styles.ruleLabel}>{label}</Text>
      <Switch
        onValueChange={() => setRule(rule, !context.app.rules[rule])}
        value={context.app.rules[rule]}
      />
    </View>
  )

  function start() {
    context.dispatch({ type: 'SET_PLAYERS', payload: game.sortCharacters(context.app.rules, context.app.seed + context.app.game) })
    navigation.navigate('Player')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Rule label="Usar Merlin" rule='merlin'></Rule>
        <Rule label="Usar Assassino" rule='assassin'></Rule>
        <Rule label="Usar Percival" rule='percival'></Rule>
        <Rule label="Usar Morgana" rule='morgana'></Rule>
        <Rule label="Usar Oberon" rule='oberon'></Rule>
        <Rule label="Usar Mordred" rule='mordred'></Rule>
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
