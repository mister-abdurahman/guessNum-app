import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, xtraStyle }) {
  return <Text style={[style.textStyle, xtraStyle]}>{children}</Text>;
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    fontFamily: "Open-Sans",
    color: Colors.accent500,
    fontWeight: "100",
  },
});

export default InstructionText;
