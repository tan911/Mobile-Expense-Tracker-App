import { StatusBar, Platform, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin: 0 12px;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

export const SafeAreaInnerWrapper = styled.View`
  padding-top: 15px;
  flex: 1;
`;
