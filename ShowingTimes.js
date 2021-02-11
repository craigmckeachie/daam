import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NormalText } from "./NormalText";
import { theme } from "./theme";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export function ShowingTimes({ selected_date, showings = [] }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function pickShowingTime(showing) {
    dispatch({ type: "HIDE_FILM_DETAILS" });
    dispatch({ type: "SET_SELECTED_SHOWING", selected_showing: showing });
    navigation.push("PickSeats");
  }
  return (
    <View>
      <Text style={{ ...theme.text.subtitle, textAlign: "center" }}>
        Showing times for {selected_date.toDateString()}
      </Text>
      <View style={styles.showingsContainer}>
        {showings.map(showing => (
          <NormalText
            style={{
              fontSize: 20,
              padding: theme.spacing.m,
              borderWidth: 0.25
            }}
            key={showing.id}
            onPress={() => pickShowingTime(showing)}
          >
            {new Date(showing.showing_time).toShowingTimeString()}
          </NormalText>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  showingsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
});
