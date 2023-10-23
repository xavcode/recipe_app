import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigator/AppNavigator';

export default function App() {
  return (
  <AppNavigator/>
  );
}

