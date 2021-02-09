import React from "react";
import { Text } from "react-native";
import { theme } from "./theme";

export const Headline = props => (
  <Text style={theme.text.headline}>{props.children}</Text>
);
