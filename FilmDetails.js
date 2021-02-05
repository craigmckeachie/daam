import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { ShowingTimes } from "./ShowingTimes";
import { host } from "./store/api_host_maker";

export function FilmDetails({ film, selected_date, showings = [] }) {
  console.log(showings);
  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: `${host}/${film.poster_path}` }}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <ShowingTimes selected_date={selected_date} showings={showings} />
        <Text>{film.title}</Text>
        <Text>{film.runtime} minutes</Text>
        <Text>{film.tagline}</Text>
        <Text>{film.overview}</Text>
        <Text>Rating: {film.vote_average}</Text>
        <Text>Ratings: {film.vote_count}</Text>
        <Text>Released: {new Date(film.release_date).toDateString()}</Text>
      </View>
    </ScrollView>
  );
}
