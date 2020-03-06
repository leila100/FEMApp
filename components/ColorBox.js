import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ColorBox = ({ color, text }) => {
  return (
    <View style={styles.box}>
      <Text style={{ backgroundColor: color, ...styles.text }}>
        {text}: {color}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    padding: 5,
    color: "white",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    width: "90%"
  }
});

export default ColorBox;