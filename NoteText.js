import React from "react";
import { Text } from "react-native";
import { theme } from "./theme";

export const NoteText = props => (
  <Text style={theme.text.note}>{props.children}</Text>
);
