import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { theme } from "./theme";
import { NormalText } from "./NormalText";

export function SeatBox({ seat, status }) {
  let backgroundColor = theme.colors.altLight;
  let color = theme.colors.mainDark;
  if (seat.status === "seatIsTaken") {
    backgroundColor = theme.colors.disabledBackground;
    color = theme.colors.disabled;
  }
  if (seat.status === "seatIsSelected") {
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
      {/* <NormalText style={{ color: color }}>Seat {number}</NormalText> */}
      <View style={{ left: (seat.seat_number - 1) * 50 }}>
        <Image source={require("./assets/seat.png")} style={styles.seatImage} />
        <Text style={{ ...styles.seat, ...styles[seat.status] }}>
          {seat.seat_number}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  seat: {
    position: "absolute",
    padding: 5,
    marginRight: 5,
    fontWeight: "bold",
    width: 50,
    height: 50
  },
  seatImage: {
    position: "absolute",
    width: 50,
    height: 50
  },
  seatIsTaken: {
    color: theme.colors.mainLight,
    backgroundColor: theme.colors.seatIsTakenBackground
  },
  seatIsSelected: {
    color: theme.colors.mainLight,
    backgroundColor: theme.colors.seatIsSelectedBackground
  }
});
