import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import { LinearGradient } from "expo-linear-gradient";
import Color from "./constants/Color";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, SetGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/open-sans-regular.ttf"),
    "open-sans-bold": require("./assets/fonts/open-sans-bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  function pickedNumerHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    SetGameIsOver(false);
  }
  function GameOverHandler(GameRound) {
    SetGameIsOver(true);
    setGuessRounds(GameRound);
  }
  function onStartNewGame() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumerHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={guessRounds}
        onStartNewGame={onStartNewGame}
      />
    );
    console.log(22);
  }
  return (
    <>
      <StatusBar style={"light"} />
      <LinearGradient
        colors={[Color.primary600, Color.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgrounImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  backgrounImage: {
    opacity: 0.15,
  },
});
