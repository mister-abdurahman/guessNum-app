import React from "react";
import { TextInput, View, Pressable, StyleSheet, Text } from "react-native";

function PrimaryBtn({ children, onClick }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
      onPress={onClick}
        // onPress={() => alert("pressed!")}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});

export default PrimaryBtn;
