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
    navigation.push("PickSeats", { showing });
  }
  return (
    <View>
      <Text style={{ ...theme.text.subtitle, textAlign: "center" }}>
        Showing times for {selected_date.toDateString()}
      </Text>
      <View style={styles.showingsContainer}>
        {showings.map(showing => (
          <NormalText key={showing.id} onPress={() => pickShowingTime(showing)}>
            {showing.showing_time.toShowingTimeString()}
          </NormalText>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  showingsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
