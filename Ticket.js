import React from "react";
import { Button, Image, View } from "react-native";
import { ScrollScreen } from "./ScrollScreen";
import { NormalText } from "./NormalText";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Title } from "./Title";
import { host } from "./store/api_host_maker";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function Ticket() {
  const navigation = useNavigation();
  const ticket_number = getRandomInt(50000, 1000000);
  const film = useSelector(state => state.selected_film);
  const showing = useSelector(state => state.selected_showing);

  return (
    <ScrollScreen>
      <NormalText>
        We're looking forwad to seeing you! Show this to your host when you
        arrive. This is your ticket.
      </NormalText>
      <View style={{ flexDirection: "row", alignItems: "center", margin: 30 }}>
        <Image
          source={{ uri: `${host}/${film.poster_path}` }}
          style={{ height: 160, width: 100, resizeMode: "contain", flex: 1 }}
        />
        <Title style={{ flex: 1 }}>{film.title}</Title>
      </View>
      <NormalText style={{ fontSize: 24 }}>
        {showing.showing_time.toShowingDateString()}{" "}
        {showing.showing_time.toShowingTimeString()}
      </NormalText>
      <NormalText style={{ fontSize: 24 }}>
        Ticket Number: {ticket_number}
      </NormalText>
      <Button
        title="Look for Another Movie"
        onPress={() => navigation.popToTop()}
      />
    </ScrollScreen>
  );
}
