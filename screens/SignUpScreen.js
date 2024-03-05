import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const LoginScreen = () => {
  return (
    <View style= {styles.container}>
        <View style = {styles.logocontainer}>
            <Image style = {styles.image}source={require('..//assets//cc.png')}/>
        </View>
        <LoginForm/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    image : {
        height: 100,
        width: 100,
    },

    logocontainer: {
        alignItems: 'center',
        marginTop: 60,
    }
})

export default LoginScreen