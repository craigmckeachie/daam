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
          <Text>Checkout</Text>

          <Text>Your cart</Text>
          <View style={styles.cart}>
            {cart.seats.map(seat => (
              <View style={styles.row} key={seat._id}>
                <Text>
                  Table {seat.table_number}, Seat {seat.seat_number}
                </Text>
                <Text>{seat.price}</Text>
              </View>
            ))}
          </View>
          <View style={styles.underline}></View>
          <View style={styles.row}>
            <Text>Subtotal</Text>
            <Text>{subtotal}</Text>
          </View>
          <View style={styles.row}>
            <Text>Tax</Text>
            <Text>{tax}</Text>
          </View>
          <View style={styles.underline}></View>
          <View style={styles.row}>
            <Text>Total</Text>
            <Text>{grandtotal}</Text>
          </View>

          <Text>First name</Text>
          <TextInput value={firstName} onChangeText={setFirstName} />
          <Text>Last name</Text>
          <TextInput value={lastName} onChangeText={setLastName} />
          <Text>Credit Card</Text>
          <TextInput
            value={creditCard}
            onChangeText={setCreditCard}
            keyboardType="number-pad"
          />
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text>Phone</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <Button title="Purchase" onPress={purchase} />
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
    width: 350
  },
  underline: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
