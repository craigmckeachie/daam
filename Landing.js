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
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require("./assets/daam.png")}
            style={{ height: 75, width: 75 }}
          />
          <Text>Dinner And a Movie</Text>
        </View>
        <Text>
          Tap a film to see the details and pick a date to see showtimes.
        </Text>

        <DatePicker selected_date={selected_date} />

        {films.map(film => (
          <FilmBrief
            film={film}
            key={film.id}
            isSelected={film === selected_film}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row"
  }
});
