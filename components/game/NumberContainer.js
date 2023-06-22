import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import Color from "../../constants/Color";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.contanier}>
      <Text style={styles.Numbertext}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Numbertext: {
    color: Color.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
