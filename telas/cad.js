import { bold } from "colorette";
import React, { useState } from "react";
import {
  StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity
} from "react-native";

export default function Cad() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
          
         <View style={styles.container}> 

         <Text style={styles.Texto}>Novo por aqui? Cadastre-se</Text>
          <Image style={styles.image} source={require("../assets/binoculo.png")} />
          <View style={styles.inputView, styles.cima}>
            <TextInput
              style={styles.TextInput}
              placeholder="Organizador"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Atleta"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Próximo</Text>
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

   inputView: {
    backgroundColor: "#F8F8FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  cima:{
    backgroundColor: "#F8F8FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 30,
    alignItems: "center",
    marginTop: 130,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginRight: 90,
  },
  Texto: {
    marginTop: 160,
    marginLeft: 30,
    marginRight: 180,
    fontSize: 30,
    fontFamily: "bold",
  },
  loginBtn: {
    width: "35%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#F8F8FF",
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",

  },
  flx: {
    flex: 2
  }
});
