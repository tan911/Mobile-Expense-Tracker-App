import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useNavigate, useNavigation } from 'react-router-dom';
import CommunityCard from '../components/UI/CommunityCard';

const AddComment = ({ route, navigation }) => {
  const post = route.params?.post;

  return (
    <View style={styles.container}>
      <CommunityCard post={post} />
      <TextInput placeholder="enter comment"></TextInput>
    </View>
  );
};

export default AddComment;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    height: '50%',
  },
});
