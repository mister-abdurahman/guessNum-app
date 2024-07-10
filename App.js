import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { GameProvider, useGameContext } from "./state/context";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const { inputNum, setInputNum, chosenNum } = useGameContext();

  const screen = chosenNum ? <GameScreen /> : <StartGame />;
  console.log(chosenNum);

  return (
    <GameProvider>
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <StatusBar style="light" />
        <ImageBackground
          style={styles.rootScreen}
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.15 }}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
