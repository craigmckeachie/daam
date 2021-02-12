import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import PinchZoomView from "react-native-pinch-zoom-view";
import { theme } from "./theme";
import { Title } from "./Title";
import { NoteText } from "./NoteText";
import { Table } from "./Table";

export function SeatMap() {
  const navigation = useNavigation();
  const film = useSelector(state => state.selected_film);
  const showing = useSelector(state => state.selected_showing);
  const tables = useSelector(state => state.tables);
  const reservations = useSelector(state => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_TABLES_AND_SEATS",
      theater_id: showing.theater_id
    });
    dispatch({ type: "FETCH_RESERVATIONS", showing_id: showing.id });
  }, []);

  useEffect(() => {
    tables.forEach(table => {
      table.seats.forEach(seat => {
        if (reservations?.some(res => res.seat_id === seat.id))
          seat.status = "seatIsTaken";
      });
    });
  });

  function handleCheckout() {
    navigation.navigate("Checkout");
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.heading}>
        <NoteText>Choose your seats for</NoteText>
        <Title>{film.title}</Title>
        <NoteText>on</NoteText>
        <NoteText>
          {new Date(showing.showing_time).toShowingDateString()}
        </NoteText>
        <NoteText>
          at {new Date(showing.showing_time).toShowingTimeString()}
        </NoteText>
      </View>
      <View style={{ flex: 1 }}>
        <PinchZoomView>
          <View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 2000,
              height: 1000,
              borderWidth: 1,
              borderColor: "red"
            }}
          >
            {tables.map(table => (
              <Table table={table} />
            ))}
          </View>
        </PinchZoomView>
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Check Out" onPress={() => handleCheckout()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing.l
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
