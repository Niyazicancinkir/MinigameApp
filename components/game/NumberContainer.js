import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { Children } from "react";
import Color from "../../constants/Color";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.contanier}>
      <Text style={styles.Numbertext}>{children}</Text>
    </View>
  );
}
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  contanier: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Numbertext: {
    color: Color.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
