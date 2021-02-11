import React from "react";
import { Text } from "react-native";
import { theme } from "./theme";

export const Title = props => (
  <Text style={[props.style, theme.text.title]}>{props.children}</Text>
);
