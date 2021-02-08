import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function ShowingTimes({ selected_date, showings = [] }) {
  return (
    <View>
      <Text>Showing times for {selected_date.toShowingDateString()}</Text>
      <View style={styles.showingsContainer}>
        {showings.map(showing => (
          <Text key={showing.id}>
            {showing.showing_time.toShowingTimeString()}
          </Text>
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
