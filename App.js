import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Landing } from "./Landing";
import { Checkout } from "./Checkout";
import { Ticket } from "./Ticket";
import "./helpers/Date.js";
import "./helpers/Currency.js";
import PickSeats from "./PickSeats";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./theme";
import { SeatMap } from "./SeatMap";

const appTheme = {
  ...DefaultTheme,
  colors: {
    background: "#fff",
    card: theme.colors.altLight
  }
};
const Stack = createStackNavigator();

export function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FILMS" });
  }, []);

  return (
    <NavigationContainer theme={appTheme}>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {() => <Landing {...state} />}
          </Stack.Screen>
          {/* <Stack.Screen name="PickSeats" options={{ title: "Pick Seats" }}>
            {() => <PickSeats />}
          </Stack.Screen> */}
          <Stack.Screen name="SeatMap" options={{ title: "Pick Seats" }}>
            {() => <SeatMap />}
          </Stack.Screen>
          <Stack.Screen name="Checkout">{() => <Checkout />}</Stack.Screen>
          <Stack.Screen name="Ticket">{() => <Ticket />}</Stack.Screen>
        </Stack.Navigator>
      </View>
      <StatusBar barStyle="dark-content" hidden={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
