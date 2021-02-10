import React from "react";
import { TextInput } from "react-native";
import { theme } from "./theme";

export const AppTextInput = props => {
  return (
    <TextInput
      placeholder="App Text Input"
      {...theme.text.input}
      style={theme.text.input.style}
      {...props}
    />
  );
};
