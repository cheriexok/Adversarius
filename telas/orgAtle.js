import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Orgatleta() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/log2.png")} />

     <Text style={styles.title}>Informe seus dados!</Text>
   
       <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Organizador</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Atleta</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Já tem uma conta? Entre.</Text>
      </TouchableOpacity>

 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "B8EE5A",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: 0,
    marginBottom: 180,
    width: 150,
    height: 150,
  },

  inputView: {
    backgroundColor: "#F8F8FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "35%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F8F8FF",
  },
  
  title: {
    height: 50,
    fontSize: 28,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",

  }

});
