import React, { useEffect, useMemo, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import RootContainer from "../components/UI/RootContainer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import NumLog from "../components/Game/NumLog";

function generateRandomNum(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) return generateRandomNum(min, max, exclude);
  else return randomNum;
}

function GameScreen({
  chosenNum,
  onGameOver,
  handleGuessedNumLog,
  guessedNumLog,
}) {
  const initialGuess = useMemo(
    function () {
      return generateRandomNum(1, 100, chosenNum);
    },
    [chosenNum]
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(
    function () {
      if (Number(chosenNum) === Number(currentGuess)) {
        onGameOver();
      }
    },
    [currentGuess, chosenNum, onGameOver]
  );

  function nextGuessHandler(direction) {
    handleGuessedNumLog((prev) => [currentGuess, ...prev]);
    if (
      (direction === "lower" && currentGuess < chosenNum) ||
      (direction === "higher" && currentGuess > chosenNum)
    ) {
      return Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      setCurrentGuess((prev) => generateRandomNum(1, prev, prev));
    } else {
      setCurrentGuess((prev) => generateRandomNum(prev, 100, prev));
    }
  }

  return (
    <RootContainer xtraStyle={{ marginHorizontal: 10, flex: 1 }}>
      <Title>Computer's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* guess */}

      <Card>
        <InstructionText xtraStyle={{ marginBottom: 10 }}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.btnBox}>
          <View style={{ flex: 1 }}>
            <PrimaryBtn onClick={() => nextGuessHandler("lower")}>
              <FontAwesome5 name="minus" size={24} color="white" />
            </PrimaryBtn>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryBtn onClick={() => nextGuessHandler("higher")}>
              <FontAwesome5 name="plus" size={24} color="white" />
            </PrimaryBtn>
          </View>
        </View>
        {/* + / - */}
      </Card>
      {/* Log Rounds */}

      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled
          data={guessedNumLog}
          renderItem={(data) => (
            <NumLog num={data.item} index={guessedNumLog.length - data.index} />
          )}
          keyExtractor={(_, i) => i}
          // style={{ marginTop: 15 }}
        />
      </View>
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  btnBox: {
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
    // height: "100%",
  },
});

export default GameScreen;
