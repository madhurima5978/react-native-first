import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs, {bottomTabIcons} from '../components/Home/BottomTabs'
import Stories from '../components/Home/Stories'
import Event from '../components/Home/Event'
import {EVENTS} from '../data/UserEvents'
import { SafeAreaView } from 'react-native-safe-area-context'
const EventScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Stories/>
      <ScrollView style={styles.container}>
          {EVENTS.map((event, index) => (
            <Event key={index} event={event} />
          ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen:{
    height:'100%',

  },
  container: {
    marginBottom:30,
  }
})

export default EventScreen