import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Title from "../components/Title";
import Color from "../constants/Color";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({
  onStartNewGame,
  userNumber,
  roundNumber,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game OVER!</Title>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.images}
          source={require("../assets/images/succes.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.higlight}>{roundNumber}</Text>{" "}
        rounds to guess the number
        <Text style={styles.higlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
    </View>
  );
}
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  images: { width: "100%", height: "100%" },
  ImageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Color.primary800,
    margin: 36,
    overflow: "hidden",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  higlight: { fontFamily: "open-sans-bold", color: Color.primary500 },
});
