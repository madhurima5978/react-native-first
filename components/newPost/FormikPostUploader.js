import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

import * as Yup from 'yup'
import {Formik} from 'formik'
import { Button, Divider } from 'react-native-elements'
const PLACEHOLDER_IMG = 'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the characters'),
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik
    initialValues={{caption: '',imageUrl: '' }}
    onSubmit={(values) => {
      console.log(values)
      console.log('Your post was submitted successfully')
      navigation.goBack()
    }}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    >
            {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>(
                <>
                <View style={{
                     flexDirection:'row',marginBottom:20}}>
                    <Image source={{uri:thumbnailUrl? thumbnailUrl: PLACEHOLDER_IMG}} 
                    style={{width: 100, height:100}}/>
                
            <View style={{flex: 1,padding:5}}>
                <TextInput style={{color:'black', fontSize:18}} 
                multiline={true} 
                placeholder='Write a caption'
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
                />
            </View>
                </View>
                <Divider width={0.2} orientation='vertical'/>
                <TextInput 
                onChange={(e)=> setThumbnailUrl(e.nativeEvent.text)}
                style={{fontSize:18}}
                placeholder='Enter Image URL'
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                />
                {errors.imageUrl && (
                  <Text style={{fontSize: 10, color:'red'}} >
                    {errors.imageUrl}
                  </Text>
                )}
                <Button onPress={handleSubmit} title='Share'  disabled={!isValid}/>
                </>
            )}
    </Formik>
  )
}

export default FormikPostUploader