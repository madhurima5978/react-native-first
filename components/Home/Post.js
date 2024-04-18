import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import {firebase, db} from '../../firebase';
const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: require('../../assets/heart.png'),
    likedImageUrl: require('../../assets/heart_fill.png')
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

  const [lastTap, setLastTap] = useState(null);

  const handleDoubleTap = post => {
    const now = Date.now();
    if (lastTap && now - lastTap < 300) {
      handleLike(post);
    } else {
      setLastTap(now);
    }
  };

  const handleLike = post => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    )

    db.collection('users')
    .doc(post.owner_email)
    .collection('posts')
    .doc(post.id)
    .update({
      likes_by_users: currentLikeStatus 
      ? firebase.firestore.FieldValue.arrayUnion(
          firebase.auth().currentUser.email
        )
        : firebase.firestore.FieldValue.arrayRemove(
          firebase.auth().currentUser.email
        ),
    }).then(() => {
      console.log('liked Succesfully')
    })
    .catch(error => {
      console.log('Error liking', error)
    })
  }

  return (
    <View style={styles.container}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} handleDoubleTap={handleDoubleTap} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter handleLike={handleLike} post={post}/>
        <Likes post={post}/>
      </View>
      <Caption post={post}/>
      <CommentSection post={post}/>
      <Comments post={post}/>
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
        {post.username}</Text>

    </View>
    <Text style={{fontWeight: '900', justifyContent: 'space-between', width:'6%'}}>...</Text>
    </View>
  );
};

const PostImage = ({post, handleDoubleTap}) => {
  

  return(
  <View style={{
    width: '100%',
    height: 500,
  }}>
    <TouchableOpacity onPress={()=>handleDoubleTap(post)}>
      
  <Image 
  source={{uri: post.imageUrl}}
   style={{width: '100%',
   height:'100%',
   resizeMode: 'cover',
  }}
   />
   </TouchableOpacity>
   </View>
  )
}

const PostFooter = ({handleLike, post}) => {
  return(
    <View style={{flexDirection: 'row',justifyContent:'space-between', width:'250%'}}>
      <View style={styles.leftFooterIconsContainer}>
        <TouchableOpacity onPress={() => handleLike(post)}>
          <Image style={styles.footerIcon} source={post.likes_by_users.includes(firebase.auth().currentUser.email
            ) ? postFooterIcons[0].likedImageUrl : postFooterIcons[0].imageUrl}/>
        </TouchableOpacity>
        <Divider width={1} orientation='vertical' />
        <Icon imgStyle = {styles.footerIcon} imgUrl = {postFooterIcons[1].imageUrl}/>
        <Divider width={1} orientation='vertical' />
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
const Likes = ({ post }) => {
  // Check if post.likes is defined before accessing it
  const likesCount =  post.likes_by_users.length.toLocaleString('en')

  return (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
      <Text style={{ fontWeight: '600' }}>
        {likesCount} Likes
      </Text>
    </View>
  );
};

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

const CommentSection = ({ post }) => {
  // Check if post.comments is undefined or null
  if (!post.comments) {
    return null;
  }

  return (
    <View style={{ marginTop: 5, marginLeft: 15, marginRight: 5 }}>
      {post.comments.length > 0 && (
        <Text style={{ color: 'gray' }}>
          View{' '}
          {post.comments.length > 1 ? 'all ' : ''}
          {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
};


const Comments = ({ post }) => {
  return (
    <>
      {post.comments && post.comments.map((comment, index) => (
        <View key={index} style={{ marginTop: 5, marginLeft: 15, marginRight: 5 }}>
          <Text>
            <Text style={{ fontWeight: '600' }}>{comment.user} </Text>
            {comment.comment}
          </Text>
        </View>
      ))}
    </>
  );
};

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
