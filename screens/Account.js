import React, { useContext } from "react";
import { Button, StatusBar, Text, View, Image, StyleSheet } from "react-native";
import { GlobalColor } from "../constants/color";
import { AuthenticationContext } from "../services/authentication.context";
import { SafeArea, SafeAreaInnerWrapper } from "../util/safe-area.component";
const Account = () => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.profileLogo}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2354/2354573.png",
          }}
        />
        <View style={styles.profileTexts}>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.name}>Misty Caruana</Text>
        </View>
      </View>
      <Button
        title="Logout"
        onPress={() => {
          onLogout();
          console.log("logged out...");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
  },
  profileLogo: {
    height: 45,
    width: 45,
    borderRadius: "50%",
  },
  profileTexts: {
    height: "100%",
    marginLeft: 10,
  },
  email: {
    color: GlobalColor.colors.gray400,
  },
  name: {
    fontSize: 17,
    fontWeight: "500",
  },
});

export default Account;
