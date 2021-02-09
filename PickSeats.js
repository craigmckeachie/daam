import tables from "./assets/tables.json";

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import { Title } from "./Title";

export default function PickSeats() {
  return (
    <SafeAreaView>
      <ScrollView style={{ width: 400 }}>
        <Text>Choose your seats for</Text>
        <Title>Movie Title</Title>
        <Text>on</Text>
        <Text>{new Date().toShowingDateString()}</Text>
        <Text>at {new Date().toShowingTimeString()}</Text>
        {tables.map(table => (
          <View>
            <Text>Table {table.table_number}</Text>

            <View style={styles.seatWrapper}>
              {table.seats.map(seat => (
                <Text>Seat {seat.seat_number}</Text>
              ))}
            </View>
          </View>
        ))}
        <View style={styles.buttonWrapper}>
          <Button title="Check out" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  seatWrapper: {
    width: 150,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
    // alignContent: "flex-start",
    // alignItems: "baseline"
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
