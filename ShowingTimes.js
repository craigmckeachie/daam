import React from "react";
import { View, Text } from "react-native";

export function ShowingTimes({ selected_date, showings = [] }) {
  return (
    <View>
      <Text>Showing times for {selected_date.toDateString()}</Text>
      {showings.map(showing => (
        <Text key={showing.id}>{showing.showing_time}</Text>
      ))}
    </View>
  );
}
