import React, { useState } from "react";
import { bold } from "colorette";
import {
  StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
         <View style={styles.container}> 
         
         <Text style={styles.Texto}>Olá, novo por aqui?
Crie sua conta!</Text>

          <Image style={styles.image} source={require("../assets/binoculo.png")} />

          <TouchableOpacity style={styles.Btn}>
        <Text style={styles.Texto1}>Organizador</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.Btn, styles.baixo}>
        <Text style={styles.Texto1}>Atleta</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.Entre}>
        <Text style={styles.Texto1}>Já tem uma conta? Entre.</Text>
      </TouchableOpacity>

          </View>
        </ImageBackground>
    </View>
         
   

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 710,
    width: 150,
    height: 150,
    position: "absolute",    
  },
  Texto: {
    marginTop: 130,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 180,
    fontSize: 35,
    fontWeight: "bold",
},
Texto1:{
    fontWeight: "bold",
    fontSize: 19,
},
  Btn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    marginVertical: 30,
    justifyContent: "center",
    backgroundColor: "#F8F8FF",
  },
  baixo: {
    alignItems: "center",
    width: "70%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#F8F8FF",
    marginTop: 40,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",

  },
  flx: {
    flex: 2
  },
  Entre: {
      marginTop: 107.5,
  }
});
