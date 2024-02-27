import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';

const AddNewPost = () => {
    return(
        <View style={styles.container}>
            <Header/>
            {/*post form*/ }
        </View>
    )
}
const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity >
        <Image source ={{uri: 'https://img.icons8.com/ios-glyphs/90/000000/back.png'}}
        style={{width:30, height:30}}/>
      </TouchableOpacity>
      <Text>Add New Post</Text>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {

    }
})

export default AddNewPost