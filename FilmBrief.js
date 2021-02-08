import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { host } from "./store/api_host_maker";
import { useDispatch } from "react-redux";

export function FilmBrief({ film, isSelected }) {
  const dispatch = useDispatch();
  function selectThisFilm() {
    dispatch({ type: "SET_SELECTED_FILM", film });
    dispatch({ type: "SHOW_FILM_DETAILS" });
  }

  return (
    <Pressable onPress={() => selectThisFilm()}>
      <View style={styles.movie}>
        <Image
          source={{ uri: `${host}/${film.poster_path}` }}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <Text>{film.title}</Text>
        <Text>{film.tagline}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  movie: {
    flexDirection: "row"
  }
});
