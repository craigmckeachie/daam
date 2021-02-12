import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SeatBox } from "./SeatBox";
import { theme } from "./theme";

export function Table({ table }) {
  function makeTablePositionStyle(table) {
    return {
      position: "absolute",
      top: table.y * 200 - 200,
      left: table.x * 400 - 400
    };
  }

  return (
    <View
      style={{
        ...styles.table,
        ...makeTablePositionStyle(table)
      }}
      key={table.table_number}
    >
      <Text style={theme.text.subtitle}>Table {table.table_number}</Text>

      <View style={styles.seatsWrapper}>
        {table.seats.map(seat => (
          <SeatBox key={seat._id} seat={seat} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    padding: theme.spacing.m,
    margin: theme.spacing.m,
    borderColor: theme.colors.altDark,
    backgroundColor: theme.colors.altLight,
    width: 300,
    height: 150
  },
  seatsWrapper: {
    // width: 400,
    flexDirection: "row"
    // flexWrap: "wrap"
    // justifyContent: "flex-start"
  }
});
