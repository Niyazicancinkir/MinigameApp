import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../constants/Color";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Color.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.accent500,
    flexDirection: "row",
    width: "100%",
    elevation: 4,
    justifyContent: "space-between",
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
