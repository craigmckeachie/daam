import React from "react";
import { View, Text } from "react-native";
import { theme } from "./theme";
import { NormalText } from "./NormalText";

export function SeatBox({ number, status }) {
  let backgroundColor = theme.colors.altLight;
  let color = theme.colors.mainDark;
  if (status === "seatIsTaken") {
    backgroundColor = theme.colors.disabledBackground;
    color = theme.colors.disabled;
  }
  if (status === "seatIsSelected") {
    backgroundColor = theme.colors.mainDark;
    color = theme.colors.altLight;
  }
  return (
    <View
      style={{
        backgroundColor,
        margin: theme.spacing.s,
        padding: theme.spacing.s
      }}
    >
      <NormalText style={{ color: color }}>Seat {number}</NormalText>
    </View>
  );
}
