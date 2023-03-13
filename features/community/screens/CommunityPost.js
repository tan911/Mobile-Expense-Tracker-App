import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CommunityPost = ({ post }) => {
  return (
    <View key={post.id}>
      <View>
        {/* <Image
          style={styles.profileLogo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354573.png',
          }}
        /> */}
        <Text>{post.email}</Text>
        <Text>10h ago</Text>
      </View>
      <View>
        <Text>{post.body}</Text>
      </View>
      <View>
        <View style={styles.iconWrapper}>
          <Ionicons name="heart" color="red" />
          <Text>1.2k</Text>
        </View>
      </View>
    </View>
  );
};

export default CommunityPost;

const styles = StyleSheet.create({
  iconWrapper: {
    flexDirection: 'row',
  },
});
