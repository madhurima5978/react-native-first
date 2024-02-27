import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
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
    name: 'add_post',
    active: require('../../assets/add.png'),
    inactive: require('../../assets/add.png'),
  },
  {
    name: 'profile',
    active: require('../../assets/profile_active.png'),
    inactive: require('../../assets/profile_inactive.png'),
  },
]


const BottomTabs = ({icons}) => {

  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={activeTab === icon.name ? icon.active : icon.inactive} style={styles.icon}/>
    </TouchableOpacity>
  )
  return(
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    zIndex: 999,
    backgroundColor:'#ffffff'
  },
  container:{
    flexDirection: 'row', 
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
   icon: {
    width: 30,
    height: 30,
   }, 
})


export default BottomTabs