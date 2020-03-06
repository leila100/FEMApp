import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ backgroundColor: "#2aa198", ...styles.text }}>Cyan: #2aa198</Text>
      </View>
      <View style={styles.box}>
        <Text style={{ backgroundColor: "#268bd2", ...styles.text }}>Blue: #268bd2</Text>
      </View>
      <View style={styles.box}>
        <Text style={{ backgroundColor: "#d33682", ...styles.text }}>Magenta: #d33682</Text>
      </View>
      <View style={styles.box}>
        <Text style={{ backgroundColor: "#cb4b16", ...styles.text }}>Orange: #cb4b16</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: "100%",
    padding: 5,
    color: "white"
  },
  text: {
    textAlign: "center",
    padding: 10,
    color: "white"
  }
});
