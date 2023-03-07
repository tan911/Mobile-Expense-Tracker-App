import React, { useContext } from 'react';
import { Button, StatusBar, Text, View, Image, StyleSheet, Pressable } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import { GlobalColor } from '../constants/color';
import { AuthenticationContext } from '../services/authentication.context';
import { SafeArea, SafeAreaInnerWrapper } from '../util/safe-area.component';
import { AuthErrorCodes } from 'firebase/auth';
import { AuthContext } from '../store/auth-context';
const Account = () => {
  // const { onLogout, user } = useContext(AuthenticationContext);
  const { logout } = useContext(AuthContext);
  const user = {
    email: 'dekeji1@gmail.com',
    displayName: 'This is dummy data',
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.profile}>
        <Image
          style={styles.profileLogo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354573.png',
          }}
        />
        <View style={styles.profileTexts}>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.name}>{user.displayName}</Text>
        </View>
      </View>
      <View style={styles.settingsGroup}>
        <Text style={styles.settingsGroupTitle}>Account</Text>
        <Pressable
          onPress={() => {
            logout();
            console.log('logged out...');
          }}
        >
          <View style={styles.settingsButton}>
            <Text style={styles.settingsButtonTitle}>Logout</Text>
            <SimpleLineIcons style={styles.settingsButtonIcon} name="logout" size={20} />
          </View>
        </Pressable>
      </View> */}
      <Text>Settings page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingLeft: 25,
  },
  profileLogo: {
    height: 45,
    width: 45,
    borderRadius: '50%',
  },
  profileTexts: {
    height: '100%',
    marginLeft: 10,
  },
  email: {
    color: GlobalColor.colors.gray400,
  },

  name: {
    fontSize: 17,
    fontWeight: '500',
  },

  settingsGroup: {
    margin: 25,
  },
  settingsGroupTitle: {
    fontSize: 17,
    fontWeight: '500',
  },
  settingsButton: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginVertical: 15,

    backgroundColor: '#fff',
    borderRadius: 12,
  },
  settingsButtonTitle: {
    marginRight: 'auto',
    fontWeight: '500',
  },
  settingsButtonIcon: {
    marginLeft: 'auto',
  },
});

export default Account;
