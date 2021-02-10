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
import { AppTextInput } from "./AppTextInput";
import { Label } from "./Label";
import { ScrollScreen } from "./ScrollScreen";

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
        <ScrollScreen>
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
            <Label>First Name</Label>
            <AppTextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
            <Label>Last Name</Label>
            <AppTextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
            <Label>Credit Card</Label>
            <AppTextInput
              value={creditCard}
              onChangeText={setCreditCard}
              keyboardType="number-pad"
              placeholder="Credit Card"
            />
            <Label>Email</Label>
            <AppTextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Email"
            />
            <Label>Phone</Label>
            <AppTextInput
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholder="Phone"
            />
            <Button title="Purchase" onPress={purchase} />
          </View>
        </ScrollScreen>
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
