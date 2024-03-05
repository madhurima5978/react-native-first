import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
const Settings = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source ={{uri: 'https://img.icons8.com/ios-glyphs/90/000000/back.png'}}
        style={{width:30, height:30}}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Settings