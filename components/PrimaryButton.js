import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Color from "../constants/Color";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Color.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: { borderRadius: 28, margin: 4, overflow: "hidden" },
  buttonInnerContainer: {
    backgroundColor: Color.primary600,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
