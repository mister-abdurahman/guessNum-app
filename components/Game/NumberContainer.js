import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.accent500,
    fontFamily: "Open-Sans-Bold",
    borderWidth: 4,
    padding: 18,
    marginVertical: 24,
    marginHorizontal: 52,
    borderRadius: 12,
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
  },
});

export default NumberContainer;
