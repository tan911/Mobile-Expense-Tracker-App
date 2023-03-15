import React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { SafeArea } from '../../../util/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { GlobalColor } from '../../../constants/color';
import { Image } from 'react-native';
import KeyboardDismiss from '../../../components/UI/KeyboardDismiss';
import CommunityPost from './CommunityPost';
import LoadingOverlay from '../../../components/UI/LoadingOverlay';
import { useContext } from 'react';
import { CommunityContext } from '../../../store/community-context';
import { useNavigation } from "@react-navigation/native";

import CommunityButton from '../components/UI/CommunityButton';

const CommunityHomePage = () => {
  const navigation = useNavigation();
  const { posts, isFetchingPosts } = useContext(CommunityContext);
  let content;

  if (isFetchingPosts) {
    content = <LoadingOverlay message="loading..." />;
  } else {
    const renderedPosts = (
      <FlatList
        data={posts}
        renderItem={({ item }) => <CommunityPost post={item} />}
        keyExtractor={(item) => item.id}
      />
    );

    content = renderedPosts;
  }

  const addCommentHandler = () => {
    navigation.navigate('AddComment')
  }


  return (
    <SafeArea>
      <KeyboardDismiss>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title>Community</Title>
            <CommunityButton onPress={addCommentHandler} />
          </View>
          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              placeholder="Search 'something' "
              onChangeText={() => {}}
              underlineColorAndroid="transparent"
            />
            <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
          </View>
          <View></View>
          <View style={styles.contentContainer}>{content}</View>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  },
});
