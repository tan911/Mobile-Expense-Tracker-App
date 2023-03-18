import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { GlobalColor } from '../../../../constants/color';

import IconButton from './IconButton';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useContext } from 'react';
import { CommunityContext } from '../../../../store/community-context';

const CommunityCard = ({ post, navigation }) => {
  const commentButtonPressHandler = () => {
    navigation.navigate('AddComment', { post });
  };

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
    <Pressable key={post.id} style={styles.cardContainer}>
      <View style={styles.userLabelContainer}>
        <Image
          style={styles.profileLogo}
          source={{
            uri: post.profilePhotoUrl,
          }}
        />
        <Text style={styles.userName}>{post.author}</Text>
        {}
        <Text style={styles.userTimePosted}>10h ago</Text>
      </View>
      <View style={styles.userMessageContainer}>
        <Text style={styles.userMessage}>{post.body}</Text>
      </View>
      <View style={styles.interactions}>
        <Pressable style={styles.iconWrapper} onPress={likeButtonPressHandler}>
          <IconButton icon={icon} size={20} color={color} />
          <Text style={styles.likesCount}>{post.likes}</Text>
        </Pressable>
        <Pressable style={styles.iconWrapper} onPress={commentButtonPressHandler}>
          <FontAwesome name="commenting" size={20} color="black" />
          <Text style={styles.likesCount}>{post.comments}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CommunityCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: GlobalColor.colors.slate50,
    marginBottom: 15,
    padding: 15,
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
    marginBottom: 5,
  },
  profileLogo: {
    width: 24,
    height: 24,
    borderRadius: '50%',
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
    fontWeight: '500',
    color: GlobalColor.colors.darkBlue,
  },
  interactions: {
    flexDirection: 'row',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  likesCount: {
    marginLeft: 3,
  },
});
