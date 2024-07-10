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
import PrimaryBtn from "../components/PrimaryBtn";
import { useGameContext } from "../state/context";

function StartGame() {
  //   const [inputNum, setInputNum] = useState("");
  const { inputNum, setInputNum, setChosenNum } = useGameContext();

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
    setChosenNum(inputNum);
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    marginHorizontal: 20,
    elevation: 8, //android.only
    shadowColor: "black", //IOS.only
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    marginHorizontal: "auto",
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
  },
});

export default StartGame;
