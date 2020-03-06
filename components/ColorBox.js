import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ColorBox = props => {
  const { color, text } = props;
  const textStyle = {
    color: parseInt(props.color.replace("#", ""), 16) > 0xffffff / 1.1 ? "black" : "white"
  };
  return (
    <View style={styles.box}>
      <Text style={{ backgroundColor: color, ...styles.text, ...textStyle }}>
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
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2
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
