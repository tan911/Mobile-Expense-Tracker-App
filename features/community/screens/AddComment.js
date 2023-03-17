import React from 'react';
import { View } from 'react-native';
import { useNavigate, useNavigation } from 'react-router-dom';
import CommunityCard from '../components/UI/CommunityCard';

const AddComment = ({ route, navigation }) => {
  const post = route.params?.post;

  return <CommunityCard post={post} />;
};

export default AddComment;
