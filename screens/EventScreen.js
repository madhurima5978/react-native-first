import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import BottomTabs, {bottomTabIcons} from '../components/Home/BottomTabs'
import Stories from '../components/Home/Stories'
import Event from '../components/Home/Event'
import {EVENTS} from '../data/UserEvents'
import { SafeAreaView } from 'react-native-safe-area-context'
const EventScreen = () => {
  return (
    <SafeAreaView>
      <Stories/>
      <ScrollView>
          {EVENTS.map((event, index) => (
            <Event key={index} event={event} />
          ))}
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default EventScreen