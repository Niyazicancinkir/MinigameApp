import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
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
  const { width, height } = useWindowDimensions();
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
  const marginTopDistance = height < 420 ? 60 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.Root, { marginTop: marginTopDistance }]}>
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
                <PrimaryButton onPress={deleteInputHandler}>
                  Reset
                </PrimaryButton>
              </View>

              <View style={styles.butonaligment}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  Root: {
    flex: 1,
    alignItems: "center",
  },
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
