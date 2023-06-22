import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
maxBoundary = 100;
minBoundary = 1;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    maxBoundary = 100;
    minBoundary = 1;
  }, []);

  function nextGuestHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "you know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRound) => [newRndNumber, ...prevGuessRound]);
  }
  const guessRoundsListLenght = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.butonlocation}>
          <View style={styles.butonaligment}>
            <PrimaryButton onPress={nextGuestHandler.bind(this, "lower")}>
              <Ionicons name="md-arrow-down" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.butonaligment}>
            <PrimaryButton onPress={nextGuestHandler.bind(this, "greater")}>
              <Ionicons name="md-arrow-up" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, marginTop: 20 },
  butonaligment: { flex: 1 },
  butonlocation: { flexDirection: "row" },
  InstructionText: { marginBottom: 12 },
  listContainer: { flex: 1, padding: 16 },
});
