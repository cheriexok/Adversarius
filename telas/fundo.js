import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Fundo = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
});

export default Fundo;