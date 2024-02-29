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


const BottomTabs = ({icons, navigation}) => {

  const [activeTab, setActiveTab] = useState('Event')

  
  return(
    <View style={styles.wrapper}>
    <Divider width={1} orientation='vertical' />
    <View style={styles.container}>
      {/* Home Button */}
      <TouchableOpacity onPress={() => {setActiveTab('Home');navigation.goBack()}}>
        <Image
          source={activeTab === 'Home' ? bottomTabIcons[0].active : bottomTabIcons[0].inactive}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Event Button */}
      <TouchableOpacity onPress={() => setActiveTab('Event') }>
        <Image
          source={activeTab === 'Event' ? bottomTabIcons[1].active : bottomTabIcons[1].inactive}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Add Post Button */}
      <TouchableOpacity onPress={() => {setActiveTab('add_post');navigation.push('NewPostScreen')}}>
        <Image
          source={activeTab === 'add_post' ? bottomTabIcons[2].active : bottomTabIcons[2].inactive}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity onPress={() => setActiveTab('profile')}>
        <Image
          source={activeTab === 'profile' ? bottomTabIcons[3].active : bottomTabIcons[3].inactive}
          style={styles.icon}
        />
      </TouchableOpacity>
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