import React from "react";
import { Text } from "react-native";
import { theme } from "./theme";

export const NormalText = props => (
  <Text {...props} style={[theme.text.normal, props.style]} />
);
