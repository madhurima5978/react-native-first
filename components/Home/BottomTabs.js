import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements';
export const bottomTabIcons = [
  {
    name: 'Home',
    active: require('../../assets/home_active.png'),
    inactive: require('../../assets/home_inactive.png'),
  },
  {
    name: 'Event',
    active: require('../../assets/event_active.png'),
    inactive: require('../../assets/event_inactive.png'),
  },
  {
    name: 'profile',
    active: require('../../assets/profile_active.png'),
    active: require('../../assets/profile_inactive.png'),
  }
]


const BottomTabs = ({icons}) => {

  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={icon.inactive} style={styles.icon}/>
    </TouchableOpacity>
  )
  return(
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    height: 50,
    paddingTop: 10,
  },
   icon: {
    width: 30,
    height: 30,
   }, 
})


export default BottomTabs