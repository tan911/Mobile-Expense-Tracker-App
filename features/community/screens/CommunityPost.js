import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
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

  const { icon, color, likes } = iconButton;

  return (
    <Pressable key={post.id} style={styles.rootContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.userLabelContainer}>
          {/* <Image
            style={styles.profileLogo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354573.png',
            }}
          /> */}
          <EvilIcons name="user" size={30} color="black" />
          <Text style={styles.userName}>{post.author}</Text>
          <Text style={styles.userTimePosted}>10h ago</Text>
        </View>
        <View style={styles.userMessageContainer}>
          <Text style={styles.userMessage}>{post.body}</Text>
        </View>
        <View>
          <View style={styles.iconWrapper}>
            <IconButton icon={icon} color={color} onPress={likeButtonPressHandler} />
            <Text style={styles.likesCount}>{post.likes}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CommunityPost;

const styles = StyleSheet.create({
  rootContainer: {
    // borderWidth: 1,
  },
  cardContainer: {
    backgroundColor: GlobalColor.colors.slate50,
    marginBottom: 15,
    padding: 10,
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  userLabelContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  userName: {
    marginLeft: 5,
  },
  userTimePosted: {
    marginLeft: 5,
    color: GlobalColor.colors.gray400,
  },
  userMessageContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  userMessage: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalColor.colors.darkBlue,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  likesCount: {
    marginLeft: 5,
  },
});
