import { StyleSheet, Text } from "react-native";
import React from "react";
import Color from "../constants/Color";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instraction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instraction: {
    color: Color.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
