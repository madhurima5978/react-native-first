import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Room from '../components/Room/Room'
const RoomScreen = () => {
  return (
    <SafeAreaView>
        <Room/>
    </SafeAreaView>
  )
}

export default RoomScreen