import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { GlobalColor } from '../../../constants/color';

import IconButton from '../components/UI/IconButton';

const CommunityPost = ({ post }) => {
  const [iconButton, setIconButton] = useState({
    icon: 'heart-outline',
    color: '',
    likes: 0,
  });

  const likeButtonPressHandler = () => {
    setIconButton({
      icon: 'heart',
      color: 'red',
      likes: +1,
    });
  };

  const commentButtonPressHandler = () => {};

  const { icon, color, likes } = iconButton;

  return (
    <Pressable key={post.id} style={styles.cardContainer}>
      <View style={styles.userLabelContainer}>
        <Image
          style={styles.profileLogo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354573.png',
          }}
        />
        <Text style={styles.userName}>{post.author}</Text>
        <Text style={styles.userTimePosted}>10h ago</Text>
      </View>
      <View style={styles.userMessageContainer}>
        <Text style={styles.userMessage}>{post.body}</Text>
      </View>
      <View style={styles.interactions}>
        <View style={styles.iconWrapper}>
          <IconButton icon={icon} color={color} onPress={likeButtonPressHandler} />
          <Text style={styles.likesCount}>{post.likes}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <FontAwesome name="commenting" size={20} color="black" />
          <Text style={styles.likesCount}>{post.comments}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CommunityPost;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: GlobalColor.colors.slate50,
    marginBottom: 15,
    padding: 10,
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'grey',
    shadowOpacity: 0.25,
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 8,
  },
  userLabelContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileLogo: {
    width: 24,
    height: 24,
  },
  userName: {
    marginLeft: 5,
  },
  userTimePosted: {
    marginLeft: 5,
    color: GlobalColor.colors.gray400,
  },
  userMessageContainer: {
    paddingBottom: 10,
  },
  userMessage: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalColor.colors.darkBlue,
  },
  interactions: {
    flexDirection: 'row',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likesCount: {
    marginLeft: 1,
  },
});
