
import { View, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default NewGame = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonList}>
        <Button 
          style={styles.button} 
          title="Novo Jogo" 
          onPress={() => navigation.navigate('Code')}
        ></Button>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
