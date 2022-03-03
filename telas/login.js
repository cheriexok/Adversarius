import { bold } from "colorette";
import React, { useState } from "react";
import {
  StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
         <View style={styles.container}>          
         <Text style={styles.fonte}>Olá</Text> 
          <Image style={styles.image} source={require("../assets/binoculo.png")} />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>      
          </View>
        </ImageBackground>
    </View>
         
   

  );
}

const styles = StyleSheet.create({
  container: {
    /*flex: 2,*/
    /*backgroundColor: "#fff",*/
    alignItems: "center",
    justifyContent: "center",
    
  },

  image: {
    marginBottom: 310,
    width: 150,
    height: 150,
    
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 60,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginRight: 50,
    backgroundColor: "white",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",

  },
  imageForeground: {
    width: 250,
    height: 250
  },

  flx: {
    flex: 2
  },
  fonte: {
    fontFamily: "bold",
    
  }
});
