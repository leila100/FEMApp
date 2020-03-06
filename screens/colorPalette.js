import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";

import ColorBox from "../components/ColorBox";

const ColorPalette = props => {
  const COLORS = props.route.params.colors;
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={COLORS}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => <ColorBox color={item.hexCode} text={item.colorName} />}
        ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 5
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default ColorPalette;
