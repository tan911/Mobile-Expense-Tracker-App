import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import { SafeArea } from '../../../util/safe-area.component';
import { Ionicons } from '@expo/vector-icons';

const CommunityHomePage = () => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <Title>Community</Title>
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="User Nickname"
            onChangeText={(searchString) => {
              this.setState({ searchString });
            }}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default CommunityHomePage;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
