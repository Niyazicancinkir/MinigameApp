import { StyleSheet, Text, View } from "react-native";
import React from "react";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.titles}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titles: {
    fontSize: 24,
    fontFamily: "open-sans",
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    padding: 12,
    textAlign: "center",
  },
});
