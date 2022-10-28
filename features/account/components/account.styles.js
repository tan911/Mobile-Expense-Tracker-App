import styled from "styled-components/native";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { GlobalColor } from "../../../constants/color";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Spacer = styled.View`
  margin: 10px;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 12px;
  margin-top: 12px;
`;

export const AuthButton = styled(Button).attrs({
  color: GlobalColor.colors.blue500,
})`
  padding: 12px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;
