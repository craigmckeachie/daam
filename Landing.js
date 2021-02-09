import React from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Modal,
  Button,
  Image,
  StyleSheet
} from "react-native";
import { FilmBrief } from "./FilmBrief";
import { DatePicker } from "./DatePicker";
import { useDispatch } from "react-redux";
import { FilmDetails } from "./FilmDetails";
import { theme } from "./theme";
import { ScrollScreen } from "./ScrollScreen";
import { NormalText } from "./NormalText";

export function Landing({
  films,
  selected_date,
  selected_film,
  show_film_details,
  showings
}) {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Modal visible={show_film_details}>
        <FilmDetails
          film={selected_film}
          selected_date={selected_date}
          showings={showings}
        />
        <Button
          title="Done"
          onPress={() => dispatch({ type: "HIDE_FILM_DETAILS" })}
        />
      </Modal>
      <ScrollScreen>
        <View style={styles.header}>
          <Image
            source={require("./assets/daam-logo.png")}
            style={{ height: 70, width: 160 }}
          />
        </View>
        <NormalText style={{ padding: theme.spacing.m }}>
          Tap a film to see the details and pick a date to see showtimes.
        </NormalText>

        <DatePicker
          style={{ padding: theme.spacing.xl }}
          selected_date={selected_date}
        />

        {films.map(film => (
          <FilmBrief
            film={film}
            key={film.id}
            isSelected={film === selected_film}
          />
        ))}
      </ScrollScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    borderBottomColor: theme.colors.mainDark,
    borderBottomWidth: 1,
    padding: theme.spacing.l,
    justifyContent: "center"
  }
});
