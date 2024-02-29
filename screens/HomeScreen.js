import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Post from '../components/Home/Post'
import {POSTS} from '../data/UserPosts'
import BottomTabs, { bottomTabIcons } from '../components/Home/BottomTabs'
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
        <Header/>
        <ScrollView style={styles.container}>
          {POSTS.map((post, index) => (
            <Post key={index} post={post} />
          ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}  navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    height:'100%',
  },
    container: {
        flex: 1,
        marginBottom:30,
    },
    post: {
      marginBottom: 16,
      height: '100%',
    },
});

export default HomeScreen