import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import EventScreen from './screens/EventScreen';
import SignedInStack from './navigaton';
import LoginScreen from './screens/SignUpScreen';

export default function App() {
  return (
    <SignedInStack/>
    
  );
}
