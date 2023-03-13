import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import { SafeArea } from '../../../util/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { GlobalColor } from '../../../constants/color';
import { Image } from 'react-native';
import KeyboardDismiss from '../../../components/UI/KeyboardDismiss';

const CommunityHomePage = () => {
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

          <View>
            <View>
              <Image
                style={styles.profileLogo}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354573.png',
                }}
              />
            </View>
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
});
