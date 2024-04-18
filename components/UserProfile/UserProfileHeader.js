import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {firebase, db} from '../../firebase'

const UserProfileHeader = ({users}) => {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight:'700', fontSize: 20}}>{users.user}</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../../assets/menu.png')} 
             style={{ width: 20, height: 20 }}/>
        </TouchableOpacity>

        
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
        marginTop:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'90%',
        marginBottom: 10,
    }
})

export default UserProfileHeader