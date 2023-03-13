import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { GlobalColor } from '../../../constants/color';

const CommunityPost = ({ post }) => {
  return (
    <View key={post.id} style={styles.rootContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.userLabelContainer}>
          {/* <Image
            style={styles.profileLogo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354573.png',
            }}
          /> */}
          <EvilIcons name="user" size={30} color="black" />
          <Text style={styles.userName}>{post.email}</Text>
          <Text style={styles.userTimePosted}>10h ago</Text>
        </View>
        <View style={styles.userMessageContainer}>
          <Text style={styles.userMessage}>{post.body}</Text>
        </View>
        <View>
          <View style={styles.iconWrapper}>
            <Ionicons name="heart" size={18} color="red" />
            <Text style={styles.likesCount}>1.2k</Text>
          </View>
        </View>
      </View>
    </View>
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
    color: GlobalColor.colors.gray400
  },
  userMessageContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  userMessage: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalColor.colors.darkBlue
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  likesCount: {
    marginLeft: 5,
  }
});
