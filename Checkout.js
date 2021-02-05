import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView
} from "react-native";

export function Checkout(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [creditCard, setCreditCard] = useState(props.creditCard);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);

  function purchase() {}

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <Text>Checkout</Text>
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
