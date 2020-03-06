import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";

import ColorBox from "../components/ColorBox";

const ColorPalette = props => {
  const { colors, paletteName } = props.route.params;
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => <ColorBox color={item.hexCode} text={item.colorName} />}
        ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
    </SafeAreaView>
  );
};

ColorPalette.navigationOptions = {
  headerTitle: "Colors"
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default ColorPalette;
