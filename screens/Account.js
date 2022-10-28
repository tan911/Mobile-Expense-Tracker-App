import React, { useContext } from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { AuthenticationContext } from "../services/authentication.context";
const Account = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
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

export default Account;
