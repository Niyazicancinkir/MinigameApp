import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../constants/Color";

export default function Card({ children }) {
  return <View style={styles.InputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: Color.primary700,
    padding: 16,
    marginTop: 30,
    marginHorizontal: 24,
    elevation: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
