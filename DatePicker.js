import React, { useState } from "react";
import {
  View,
  Button,
  DatePickerAndroid,
  DatePickerIOS,
  Platform
} from "react-native";
import { useDispatch } from "react-redux";
import { theme } from "./theme";

export function DatePicker({ selected_date, style }) {
  const [showIosPicker, setShowIosPicker] = useState(false);
  const dispatch = useDispatch();
  const showModal = async () => {
    if (Platform.OS === "android") {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: selected_date
        });

        dispatch({
          type: "SET_SELECTED_DATE",
          date: new Date(year, month, day)
        });
      } catch ({ code, message }) {
        console.warn("Cannot open date picker", message);
      }
    }
    if (Platform.OS === "ios") {
      setShowIosPicker(!showIosPicker);
    }
  };

  return (
    <View style={{ margin: theme.spacing.m }}>
      <Button
        onPress={() => showModal()}
        title={`Showing times for ${selected_date.toDateString()}`}
      />
      {showIosPicker && (
        <DatePickerIOS
          mode="date"
          date={selected_date}
          onDateChange={date => {
            dispatch({
              type: "SET_SELECTED_DATE",
              date
            });
            setShowIosPicker(false);
          }}
        />
      )}
    </View>
  );
}
