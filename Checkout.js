import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import * as cart from "./assets/cart.json";
import { Headline } from "./Headline";
import { Title } from "./Title";
import { NormalText } from "./NormalText";
import { theme } from "./theme";

export function Checkout(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [creditCard, setCreditCard] = useState(props.creditCard);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const subtotal = cart.seats.reduce((total, seat) => (total += seat.price), 0);
  const tax = subtotal * 0.0825;
  const grandtotal = subtotal + tax;

  function purchase() {}

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <Headline>Checkout</Headline>

          <View style={styles.cart}>
            <Title>Your cart</Title>
            <View>
              {cart.seats.map(seat => (
                <View style={styles.row} key={seat._id}>
                  <NormalText>
                    Table {seat.table_number}, Seat {seat.seat_number}
                  </NormalText>
                  <NormalText>{seat.price}</NormalText>
                </View>
              ))}
            </View>
            <View style={styles.underline}></View>
            <View style={styles.row}>
              <NormalText>Subtotal</NormalText>
              <NormalText>{subtotal}</NormalText>
            </View>
            <View style={styles.row}>
              <NormalText>Tax</NormalText>
              <NormalText>{tax}</NormalText>
            </View>
            <View style={styles.underline}></View>
            <View style={styles.row}>
              <NormalText>Total</NormalText>
              <NormalText>{grandtotal}</NormalText>
            </View>
          </View>

          <View style={styles.cart}>
            <NormalText>First name</NormalText>
            <TextInput value={firstName} onChangeText={setFirstName} />
            <NormalText>Last name</NormalText>
            <TextInput value={lastName} onChangeText={setLastName} />
            <NormalText>Credit Card</NormalText>
            <TextInput
              value={creditCard}
              onChangeText={setCreditCard}
              keyboardType="number-pad"
            />
            <NormalText>Email</NormalText>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <NormalText>Phone</NormalText>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <Button title="Purchase" onPress={purchase} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cart: {
    width: 350,
    borderWidth: 1,
    borderColor: theme.colors.altDark,
    padding: theme.spacing.l,
    margin: theme.spacing.s
  },
  underline: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
