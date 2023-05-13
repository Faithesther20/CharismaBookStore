import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './app/screens/SplashScreen';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
    <SplashScreen/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
