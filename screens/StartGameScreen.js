import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Color from "../constants/Color";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number Has to be a number between 1 and 99.",
        [
          {
            style: "destructive",
            text: "Okay",
            onPress: deleteInputHandler,
          },
        ]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  }
  function deleteInputHandler() {
    setEnteredNumber("");
  }
  return (
    <View style={styles.Root}>
      <Title>Gues My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.butonlocation}>
          <View style={styles.butonaligment}>
            <PrimaryButton onPress={deleteInputHandler}>Reset</PrimaryButton>
          </View>

          <View style={styles.butonaligment}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  Root: { flex: 1, alignItems: "center", marginTop: 100 },
  numberInput: {
    color: Color.accent500,
    height: 50,
    width: 50,
    fontSize: 32,
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: Color.accent500,
    textAlign: "center",
    fontWeight: "bold",
  },

  butonaligment: { flex: 1 },
  butonlocation: { flexDirection: "row" },
});
