import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ColorBox from "./components/ColorBox";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Here are some boxes of different colours</Text>
      </View>
      <ColorBox color='#2aa198' text='Cyan' />
      <ColorBox color='#268bd2' text='Blue' />
      <ColorBox color='#d33682' text='Magenta' />
      <ColorBox color='#cb4b16' text='Orange' />
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 5
  }
});
