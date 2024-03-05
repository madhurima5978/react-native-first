import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import UpcomingEvents from './subTabs/UpcomingEvents'

import { SafeAreaView, useRoute } from 'react-native-safe-area-context'
import {EVENTS} from '../../data/UserEvents'
const UpcomingTab = () => {
    return(
      <SafeAreaView style={styles.screen}>
    <ScrollView style={styles.container}>
        {EVENTS.map((event, index) => (
          <UpcomingEvents key={index} event={event} />
        ))}
    </ScrollView>
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
  
export default UpcomingTab