import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements';
import FormikPostUploader from './FormikPostUploader';
import 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const AddNewPost = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <UploadImage /> 
            <FormikPostUploader navigation={navigation}/>
            
        </View>
    )
}
const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source ={{uri: 'https://img.icons8.com/ios-glyphs/90/000000/back.png'}}
        style={{width:30, height:30}}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
      
    </View>
  )
}

const UploadImage = () => {
    const [image, setImage] = useState(null);
  
    // Request permission to access camera roll
    const getPermissionAsync = async () => {
      if (Constants.platform?.ios) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };
  
    // Open image picker
    const pickImage = async () => {
      await getPermissionAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <TouchableOpacity onPress={pickImage}>
            <Text>
            Pick an image from camera roll
            </Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
        marginBottom:10
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25,
        
    },
})

export default AddNewPost