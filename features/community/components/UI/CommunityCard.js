import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { GlobalColor } from '../../../../constants/color';

import IconButton from './IconButton';
import { useNavigate, useNavigation } from 'react-router-dom';

const CommunityCard = ({ post, navigation }) => {
  const likeButtonPressHandler = () => {};

  const commentButtonPressHandler = () => {
    navigation.navigate('AddComment', { post });
  };

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
        {}
        <Text style={styles.userTimePosted}>10h ago</Text>
      </View>
      <View style={styles.userMessageContainer}>
        <Text style={styles.userMessage}>{post.body}</Text>
      </View>
      <View style={styles.interactions}>
        <Pressable style={styles.iconWrapper} onPress={likeButtonPressHandler}>
          <Ionicons
            name={!post.liked ? 'heart-outline' : 'heart'}
            size={20}
            color={!post.liked ? 'black' : 'red'}
          />
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
    marginRight: 15,
  },
  likesCount: {
    marginLeft: 3,
  },
});
