import styled from "styled-components/native";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { GlobalColor } from "../../../constants/color";
import React, { useState } from "react";

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
  padding: 25px;
  margin-top: 12px;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const AuthButton = styled(Button).attrs({
  color: GlobalColor.colors.blue500,
})`
  padding: 13px;
  display: block;
  width: 100%;
  border-radius: 15px;
  margin-top: 20px;
`;

export const AuthInputWrapper = styled.View`
width: 100%
  border-radius: 50px;
`;

export const AuthInput = styled.TextInput`

  width: 100%;
  background-color: none;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 20px;
  background color: ${GlobalColor.colors.inputBackground};
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
