import React from "react";
import { ScrollView, Text, SafeAreaView, Modal, Button } from "react-native";
import { FilmBrief } from "./FilmBrief";
import { DatePicker } from "./DatePicker";

export function Landing({ films, selected_date, selected_film }) {
  return (
    <SafeAreaView>
      {/* <Modal>
        <Text>Modal Open</Text>
        <Button title="Done" />
      </Modal> */}
      <ScrollView>
        <Text>Dinner And a Movie!</Text>
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
