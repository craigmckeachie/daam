import React from "react";
import { Text } from "react-native";
import { theme } from "./theme";

export const Label = props => {
  return <Text style={theme.text.label} {...props} />;
};
