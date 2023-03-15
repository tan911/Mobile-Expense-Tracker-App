import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import { SafeArea } from '../../../util/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { GlobalColor } from '../../../constants/color';
import { Image } from 'react-native';
import KeyboardDismiss from '../../../components/UI/KeyboardDismiss';
import { useEffect } from 'react';
import axios from 'axios';
import CommunityPost from './CommunityPost';
import LoadingOverlay from '../../../components/UI/LoadingOverlay';

const CommunityHomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setPosts(posts.data);
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  let content;
  if (isFetching) {
    content = <LoadingOverlay message="loading..." />;
  } else {
    const renderedPosts = posts.map((post) => <CommunityPost key={Math.random() * 5000} post={post} />);
    content = renderedPosts;
  }

  return (
    <SafeArea>
      <KeyboardDismiss>
        <View style={styles.container}>
          <Title>Community</Title>
          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              placeholder="Search 'something' "
              onChangeText={() => {}}
              underlineColorAndroid="transparent"
            />
            <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
          </View>
          <View style={styles.contentContainer}>
            <ScrollView>{content}</ScrollView>
          </View>
        </View>
      </KeyboardDismiss>
    </SafeArea>
  );
};

export default CommunityHomePage;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 3,
    paddingLeft: 15,
    marginTop: 10,
    borderRadius: 15,
  },
  searchIcon: {
    padding: 10,
    color: GlobalColor.colors.gray400,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize: 14,
  },
  profileLogo: {
    height: 45,
    width: 45,
    borderRadius: '50%',
  },
  contentContainer: {
    marginTop: 20,
  }
});
