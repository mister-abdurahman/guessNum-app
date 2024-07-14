import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function NumLog({ index, num }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>#{index}</Text>
      <Text style={styles.text}>Opponent's Guess: {num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.accent500,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.primary700,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    marginVertical: 6,
  },
  text: {
    color: Colors.primary700,
  },
});

export default NumLog;
