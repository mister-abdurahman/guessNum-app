import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Pressable,
  Alert,
} from "react-native";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import { useGameContext } from "../state/context";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import RootContainer from "../components/UI/RootContainer";

function StartGame({ onChosenNum }) {
  const [inputNum, setInputNum] = useState("");
  //   const { inputNum, setInputNum, setChosenNum } = useGameContext();

  function numInputHandler(enteredText) {
    setInputNum(enteredText);
  }
  function handleReset() {
    setInputNum("");
  }
  function handleConfirm() {
    const chosenNum = parseInt(inputNum);

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid Number !", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
    }
    // setChosenNum(inputNum);
    onChosenNum(inputNum);
  }

  return (
    <RootContainer>
      {/* <View style={{ alignItems: "center" }}> */}
      <Title>Guess my Number</Title>
      {/* </View> */}
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          value={inputNum}
          onChangeText={numInputHandler}
          maxLength={2}
          keyboardType="number-pad"
        />
        <View style={{ flexDirection: "row", marginTop: 8, gap: 6 }}>
          <View style={{ flex: 1 }}>
            <PrimaryBtn onClick={handleReset}>Reset</PrimaryBtn>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryBtn onClick={handleConfirm}>Confirm</PrimaryBtn>
          </View>
        </View>
      </Card>
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    marginHorizontal: "auto",
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
  },
});

export default StartGame;
