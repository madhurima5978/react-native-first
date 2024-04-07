import { View, Text, Image } from 'react-native'
import React from 'react'
import {firebase} from '../../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
const handleSignOut = async() => {
  try{
    await firebase.auth().signOut()
    console.log('Signed out successfully')
  }catch(error){
    console.log(error)
  }
}


const UserPosts = () => {
  return (
    <View>
      <Image />
      <TouchableOpacity onPress={handleSignOut} style={{ backgroundColor: '#24cfff', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius:30 }}>
      <Text style={{ color: 'white' }}>Sign Out</Text>
    </TouchableOpacity>

      <Text style={{height:'77%',}}></Text>
    </View>
  )
}

export default UserPosts