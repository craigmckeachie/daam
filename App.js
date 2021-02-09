import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Landing } from "./Landing";
import { Checkout } from "./Checkout";
import "./helpers/Date.js";
import "./helpers/Currency.js";
import PickSeats from "./PickSeats";

export function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FILMS" });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />
      <Landing {...state} />
      {/* <PickSeats /> */}
      {/* <Checkout /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
