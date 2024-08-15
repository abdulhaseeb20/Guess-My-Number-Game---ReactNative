import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import PrimaryButton from './components/PrimaryButton';
//import startGame from './screens/StartGameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return <StartGameScreen/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
