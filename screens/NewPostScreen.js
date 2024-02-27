import { View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'
import HomeScreen from './HomeScreen'
const NewPostScreen = () => {
  return (
    <SafeAreaView>
        <AddNewPost/>
    </SafeAreaView>
  )
}

export default NewPostScreen