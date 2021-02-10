import tables from "./assets/tables.json";

import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { Title } from "./Title";

import { ScrollScreen } from "./ScrollScreen";
import { theme } from "./theme";
import { NoteText } from "./NoteText";
import { SeatBox } from "./SeatBox";
export default function PickSeats() {
  return (
    <SafeAreaView>
      <ScrollScreen>
        <View style={styles.heading}>
          <NoteText>Choose your seats for</NoteText>
          <Title>Movie Title</Title>
          <NoteText>on</NoteText>
          <NoteText>{new Date().toShowingDateString()}</NoteText>
          <NoteText>at {new Date().toShowingTimeString()}</NoteText>
        </View>

        {tables.map(table => (
          <View style={styles.table} key={table.id}>
            <Text style={theme.text.subtitle}>Table {table.table_number}</Text>

            <View style={styles.seatsWrapper}>
              {table.seats.map(seat => (
                <SeatBox
                  key={seat._id}
                  number={seat.seat_number}
                  status={seat.status}
                />
              ))}
            </View>
          </View>
        ))}
        <View style={styles.buttonWrapper}>
          <Button title="Check out" />
        </View>
      </ScrollScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing.l
  },
  table: {
    borderWidth: 1,
    padding: theme.spacing.m,
    margin: theme.spacing.m,
    borderColor: theme.colors.altDark
  },
  seatsWrapper: {
    width: 400,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start"
    // alignContent: "flex-start",
    // alignItems: "baseline"
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
