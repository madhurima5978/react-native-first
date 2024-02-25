import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Post from '../components/Home/Post'
import {POSTS} from '../data/UserPosts'
const HomeScreen = () => {
  return (
    <SafeAreaView>
        <Header/>
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post key={index} post={post} />
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    post: {
      marginBottom: 16,
      height: '100%',
    },
});

export default HomeScreen