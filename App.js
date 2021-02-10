import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Landing } from "./Landing";
import { Checkout } from "./Checkout";
import "./helpers/Date.js";
import "./helpers/Currency.js";
import PickSeats from "./PickSeats";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export function App() {
  const Stack = createStackNavigator();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FILMS" });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <View style={styles.container}> */}
        {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
        <Stack.Screen name="Home">{() => <Landing {...state} />}</Stack.Screen>
        <Stack.Screen name="PickSeats" options={{ title: "Pick Seats" }}>
          {() => <PickSeats />}
        </Stack.Screen>
        <Stack.Screen name="Checkout">{() => <Checkout />}</Stack.Screen>
        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
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
