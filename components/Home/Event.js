import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';

import Stories from './Stories';

const Event = ({ event }) => {
  return (
      <View style={styles.container}>
        <Divider width={1} orientation='vertical' />
        <EventHeader event={event}/>
        <EventImage event={event}/>
      </View>
  );
};

const EventHeader = ({ event }) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      //margin: 5,
      alignItems: 'center',
    }}>

    
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
      <Image source={{uri: event.profile_picture}} style={styles.pfp} />
      <Text style={{marginLeft: 5, fontWeight: '700'}}>
        {event.user}</Text>

    </View>
    <Text style={{fontWeight: '900', justifyContent: 'space-between', width:'6%'}}>...</Text>
    </View>
  );
};

const EventImage = ({event}) => {
  if(event.imageUrl){
  return(
    <View style={{
      flex: 1,
      width: '100%',
      height: 500,
    }}>
    <Image
    source={{uri: event.imageUrl}}
     style={{height: '100%', width:'100%', resizeMode: 'cover'}}
     />
     </View>
    )}
    
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    width: '100%',
  },
  
  pfp: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
})
export default Event;