import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button, TouchableWithoutFeedback, Platform } from 'react-native';
import { USERS } from '../../data/Users';

const Stories = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {USERS.map((userObj, index) => (
        <TouchableOpacity key={userObj.user} style={styles.userContainer} onPress={toggleModal}>
          <Image
            source={{ uri: userObj.image }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text>{userObj.user}</Text>
        </TouchableOpacity>
      ))}

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={{backgroundColor:'#4bcffa',padding:10,alignItems:'center',borderRadius:20}}>
            <Text style={{color:'white'}}>Join Room</Text></TouchableOpacity>
          
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adjust as needed
    paddingHorizontal: 10, // Adjust as needed
  },
  userContainer: {
    alignItems: 'center',
    marginVertical: 10, // Adjust as needed
  },
  overlay: {
    flex: 1,
    
  },
  modalContainer: {
    height: '50%', // Adjust as needed
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Stories;
