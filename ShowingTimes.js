import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NormalText } from "./NormalText";
import { theme } from "./theme";

export function ShowingTimes({ selected_date, showings = [] }) {
  return (
    <View>
      <Text style={{ ...theme.text.subtitle, textAlign: "center" }}>
        Showing times for {selected_date.toDateString()}
      </Text>
      <View style={styles.showingsContainer}>
        {showings.map(showing => (
          <NormalText key={showing.id}>
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
