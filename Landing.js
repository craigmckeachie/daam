import React from "react";
import { ScrollView, Text, Platform } from "react-native";
import { FilmBrief } from "./FilmBrief";
import { DatePicker } from "./DatePicker";

export function Landing({ films, selected_date }) {
  return (
    <ScrollView>
      <Text>Dinner And a Movie!</Text>
      <Text>
        Tap a film to see the details and pick a date to see showtimes.
      </Text>

      <DatePicker selected_date={selected_date} />

      {films.map(film => (
        <FilmBrief film={film} key={film.id} />
      ))}
    </ScrollView>
  );
}
