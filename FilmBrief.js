import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { host } from "./store/api_host_maker";
import { useDispatch } from "react-redux";
import { theme } from "./theme";
import { Title } from "./Title";

export function FilmBrief({ film, isSelected }) {
  const dispatch = useDispatch();
  function selectThisFilm() {
    dispatch({ type: "SET_SELECTED_FILM", film });
    dispatch({ type: "SHOW_FILM_DETAILS" });
  }

  return (
    <Pressable onPress={() => selectThisFilm()}>
      <View
        style={[
          styles.movie,
          { backgroundColor: isSelected ? theme.colors.altLight : "white" }
        ]}
      >
        <Image
          source={{ uri: `${host}/${film.poster_path}` }}
          style={{ height: 160, width: 100, resizeMode: "contain" }}
        />
        <View style={{ padding: 15, flexShrink: 1 }}>
          <Title>{film.title}</Title>
          <Text style={[theme.text.normal, { flexShrink: 1 }]}>
            {film.tagline}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  movie: {
    flexDirection: "row",
    alignContent: "space-between"
  }
});
