import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import EventScreen from './screens/EventScreen';

import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/SignUpScreen';
import SignedOutStack from './navigaton';
import SignedInStack from './SignedIn';
export default function App() {
  return (
    <SignedInStack />
    
  );
}
