import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { host } from "./store/api_host_maker";
import { useDispatch } from "react-redux";

export function FilmBrief({ film, isSelected }) {
  const dispatch = useDispatch();
  function selectThisFilm() {
    dispatch({ type: "SET_SELECTED_FILM", film });
  }
  if (isSelected) {
    console.log(`This ${film.title}`);
  }

  return (
    <Pressable onPress={() => selectThisFilm()}>
      <View>
        <Text>{film.title}</Text>
        <Text>{film.tagline}</Text>
        <Image
          source={{ uri: `${host}/${film.poster_path}` }}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
      </View>
    </Pressable>
  );
}
