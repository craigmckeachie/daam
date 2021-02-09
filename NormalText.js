import React from "react";
import { Text } from "react-native";
import { theme } from "./theme";

export const NormalText = props => (
  <Text style={[theme.text.normal, props.style]}>{props.children}</Text>
);
