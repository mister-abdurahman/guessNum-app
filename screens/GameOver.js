import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import RootContainer from "../components/UI/RootContainer";
import PrimaryBtn from "../components/UI/PrimaryBtn";

function GameOver({ trials, chosenNum, onNewGame }) {
  return (
    <RootContainer
      xtraStyle={{
        justifyContent: "center",
        alignItems: "center",
        padding: 14,
      }}
    >
      <Title>Game Over !</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{trials - 1}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{chosenNum}</Text>
      </Text>
      <PrimaryBtn onClick={onNewGame}>Start New Game</PrimaryBtn>
    </RootContainer>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  summaryText: {
    textAlign: "center",
    fontFamily: "Open-Sans",
    fontSize: 24,
    marginBottom: 10,
  },
  highlight: {
    fontFamily: "Open-Sans-Bold",
    color: Colors.primary500,
  },
});

export default GameOver;
