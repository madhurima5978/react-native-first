import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import EventScreen from './screens/EventScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import BottomTabs, { bottomTabIcons } from './components/Home/BottomTabs';
import SettingsScreen from './screens/SettingsScreen';
import LiveTab from './components/Event/LiveTab';
import UpcomingTab from './components/Event/UpcomingTab';
import PastTab from './components/Event/PastTab';
import RoomScreen from './screens/RoomScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='HomeScreen' 
      screenOptions={screenOptions}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
        <Stack.Screen name='EventScreen' component={EventScreen}/>
        <Stack.Screen name='UserProfileScreen' component={UserProfileScreen}/>
        <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
        <Stack.Screen name='RoomScreen' component={RoomScreen}/>
      </Stack.Navigator>
      <BottomTabs icons={bottomTabIcons} />
      
    </NavigationContainer>
  );
};

export default SignedInStack;