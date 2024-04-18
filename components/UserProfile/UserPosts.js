import { View, StyleSheet, Button, Image,Text } from 'react-native';

import React,{useState} from 'react'
import {firebase} from '../../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePickerExample from './updateProfilePic'
const handleSignOut = async() => {
  try{
    await firebase.auth().signOut()
    console.log('Signed out successfully')
  }catch(error){
    console.log(error)
  }
}


const UserPosts = () => {


  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = (imageUri) => {
    setSelectedImage(imageUri);
  };

  return (
    <View>
      <View style={styles.container}>
      <ImagePickerExample onImageSelect={handleImageSelection} />
      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
        </View>
      )}
    </View>
      <Image />
      <TouchableOpacity onPress={handleSignOut} style={{ backgroundColor: '#24cfff', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius:30 }}>
      <Text style={{ color: 'white' }}>Sign Out</Text>
    </TouchableOpacity>

      <Text style={{height:'77%',}}></Text>
    </View>
  )
}

export default UserPosts


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});