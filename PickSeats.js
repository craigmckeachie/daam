import tables from "./assets/tables.json";

import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { Title } from "./Title";

import { ScrollScreen } from "./ScrollScreen";
import { theme } from "./theme";
import { NoteText } from "./NoteText";
import { SeatBox } from "./SeatBox";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
export default function PickSeats() {
  const navigation = useNavigation();
  const film = useSelector(state => state.selected_film);
  const showing = useSelector(state => state.selected_showing);

  function handleCheckout() {
    navigation.navigate("Checkout");
  }
  return (
    <SafeAreaView>
      <ScrollScreen>
        <View style={styles.heading}>
          <NoteText>Choose your seats for</NoteText>
          <Title>{film.title}</Title>
          <NoteText>on</NoteText>
          <NoteText>{showing.showing_time.toShowingDateString()}</NoteText>
          <NoteText>at {showing.showing_time.toShowingTimeString()}</NoteText>
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
          <Button title="Check Out" onPress={() => handleCheckout()} />
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
