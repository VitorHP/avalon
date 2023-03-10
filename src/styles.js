import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 16
  },
  buttonList: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
  },
});