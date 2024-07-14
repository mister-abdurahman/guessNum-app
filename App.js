import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { GameProvider, useGameContext } from "./state/context";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import GameOver from "./screens/GameOver";

export default function App() {
  // const { chosenNum } = useGameContext();
  const [chosenNum, setChosenNum] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  // const [numOfTrials, setNumOfTrails] = useState(0);
  const [logOfGuessedNums, setLogOfGuessedNums] = useState([]);

  const handleGameOver = useCallback(function () {
    setGameIsOver(true);
  }, []);

  const [fontsLoaded] = useFonts({
    "Open-Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open-Sans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  function handleSelectedChosenNum(chosenNum) {
    setChosenNum(chosenNum);
  }

  function handleNewGame() {
    setLogOfGuessedNums([]);
    setChosenNum(null);
    setGameIsOver(false);
  }

  const screen =
    !chosenNum && !gameIsOver ? (
      <StartGame onChosenNum={handleSelectedChosenNum} />
    ) : chosenNum && !gameIsOver ? (
      <GameScreen
        handleGuessedNumLog={setLogOfGuessedNums}
        guessedNumLog={logOfGuessedNums}
        chosenNum={chosenNum}
        onGameOver={handleGameOver}
      />
    ) : (
      <GameOver
        trials={logOfGuessedNums.length}
        chosenNum={chosenNum}
        onNewGame={handleNewGame}
      />
    );

  return (
    // <GameProvider>
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      {/* <StatusBar style="light" /> */}
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    // </GameProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
