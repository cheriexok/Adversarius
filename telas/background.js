import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";


const App = () => (
  <View style={styles.container}>

    <ImageBackground source={('./assets/background.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Adversarius</Text>
      <Image source={require('./assets/background.png')} />;

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;