import React from "react";
import { ScrollView } from "react-native";
import { theme } from "./theme";

export const ScrollScreen = props => (
  <ScrollView style={theme.screen}>{props.children}</ScrollView>
);
