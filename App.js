import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import EventScreen from './screens/EventScreen';
import SignedInStack from './navigaton';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import SignedOutStack from './navigaton';
import AuthNavigation from './AuthNavigation';

export default function App() {
  return (
    <AuthNavigation/>
  );
}
