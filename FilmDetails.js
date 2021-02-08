import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { ShowingTimes } from "./ShowingTimes";
import { host } from "./store/api_host_maker";

export function FilmDetails({ film, selected_date, showings = [] }) {
  return (
    <ScrollView>
      <View>
        <View style="styles.posterContainer">
          <Image
            source={{ uri: `${host}/${film.poster_path}` }}
            style={styles.poster}
          />
        </View>
        <ShowingTimes selected_date={selected_date} showings={showings} />
        <Text>{film.title}</Text>
        <Text>{film.runtime} minutes</Text>
        <Text>{film.tagline}</Text>
        <Text>{film.overview}</Text>

        <Text>Release Data: {new Date(film.release_date).toDateString()}</Text>
        <View style={styles.votesContainer}>
          <Text style={{ flex: 3 }}>Rating: {film.vote_average}/10</Text>
          <Text style={{ flex: 2 }}>Votes: {film.vote_count}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  posterContainer: {
    flex: 1,
    alignItems: "center"
  },
  poster: {
    height: 350,
    width: 350,
    resizeMode: "contain"
  },
  votesContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
