import React from "react";
import { StyleSheet, View } from "react-native";

function RootContainer({ children, xtraStyle }) {
  return <View style={[styles.rootContainer, xtraStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: "center",
  },
});

export default RootContainer;
