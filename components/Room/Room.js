import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Stories from '../Event/Stories'
const Room = () => {
  return (
    <View style={styles.container }>
        <Text style={{fontWeight:'800', fontSize:20}}>Let's Talk</Text>
      <Stories/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding: 10
    }
})
export default Room