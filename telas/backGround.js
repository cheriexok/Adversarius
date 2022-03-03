import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Back() {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
      </ImageBackground>
  
    
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
});
