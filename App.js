import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Header from './components/Home/Header';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    
});
