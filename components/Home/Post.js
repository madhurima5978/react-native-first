import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: require('../../assets/heart.png'),
  },
  {
    name: 'comment',
    imageUrl: require('../../assets/chat.png'),
  },
  {
    name: 'share',
    imageUrl: require('../../assets/share.png'),
  }

];

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter/>
        <Likes post={post}/>
      </View>
      <Caption post={post}/>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      //margin: 5,
      alignItems: 'center',
    }}>

    
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
      <Image source={{uri: post.profile_picture}} style={styles.pfp} />
      <Text style={{marginLeft: 5, fontWeight: '700'}}>
        {post.user}</Text>

    </View>
    <Text style={{fontWeight: '900', justifyContent: 'space-between', width:'6%'}}>...</Text>
    </View>
  );
};

const PostImage = ({post}) => {
  return(
  <View style={{
    width: '100%',
    height: 500,
  }}>
  <Image
  source={{uri: post.imageUrl}}
   style={{height: '100%', resizeMode: 'cover'}}
   />
   </View>
  )
}

const PostFooter = () => {
  return(
    <View style={{flexDirection: 'row'}}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon imgStyle = {styles.footerIcon} imgUrl = {postFooterIcons[0].imageUrl}/>
        <Icon imgStyle = {styles.footerIcon} imgUrl = {postFooterIcons[1].imageUrl}/>
        <Icon imgStyle = {styles.footerIcon} imgUrl = {postFooterIcons[2].imageUrl}/>
      </View>
    </View>
  )
}
const Icon = ({imgStyle, imgUrl}) => {
  return(
    <TouchableOpacity>
      <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
  )
}

const Likes = ({post}) => {
  return(
    <View style={{flexDirection: 'row', marginTop: 4}}>
      <Text style={{fontWeight:'600'}}>
        {post.likes.toLocaleString('en')} Likes
      </Text>

    </View>
  )
}

const Caption =({post}) => {
  return(
    <View style={{marginTop: 3, marginLeft:15, marginRight:5}}>
      <Text style={{}}>
        <Text style={{fontWeight:600}}>{post.user} </Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
    
    
  )
}



const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  
  pfp: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  postContent: {
    margin: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    marginBottom: 10,
  },
  commentContainer: {
    marginLeft: 10,
  },
  commentUsername: {
    fontWeight: 'bold',
  },
  commentText: {
    marginLeft: 10,
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
});

export default Post;
