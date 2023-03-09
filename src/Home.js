import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

const Separator = () => <View style={styles.separator} />;

export default Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        style={styles.button} 
        title="Novo Jogo" 
        onPress={() => navigation.navigate('NewGame')}
      ></Button>
      <Separator/>
      <Button 
        style={styles.button} 
        title="Ler QR Code" 
        onPress={() => navigation.navigate('Player')}
      ></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}