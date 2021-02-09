import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { ShowingTimes } from "./ShowingTimes";
import { host } from "./store/api_host_maker";
import { theme } from "./theme";
import { Title } from "./Title";
import { NormalText } from "./NormalText";
import { ScrollScreen } from "./ScrollScreen";

export function FilmDetails({ film, selected_date, showings = [] }) {
  return (
    <ScrollScreen>
      <SafeAreaView>
        <View>
          <View style="styles.posterContainer">
            <Image
              source={{ uri: `${host}/${film.poster_path}` }}
              style={styles.poster}
            />
          </View>
          <ShowingTimes selected_date={selected_date} showings={showings} />
          <Title>{film.title}</Title>
          <NormalText>{film.runtime} minutes</NormalText>
          <NormalText>{film.tagline}</NormalText>
          <NormalText>{film.overview}</NormalText>

          <NormalText>
            Release Date: {new Date(film.release_date).toDateString()}
          </NormalText>
          <View style={styles.votesContainer}>
            <NormalText style={{ flex: 3 }}>
              Rating: {film.vote_average}/
              <Text style={theme.text.note}>10</Text>
            </NormalText>
            <NormalText style={{ flex: 2 }}>
              Votes: {film.vote_count}
            </NormalText>
          </View>
        </View>
      </SafeAreaView>
    </ScrollScreen>
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
