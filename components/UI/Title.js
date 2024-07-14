import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Open-Sans-Bold",
    color: "#fff",
    borderColor: "#fff",
    padding: 12,
    borderWidth: 2,
    textAlign: "center",
    maxWidth: "80%",
  },
});

export default Title;
