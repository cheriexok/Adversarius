import { bold } from "colorette";
import React, { useState } from "react";
import {
  StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity
} from "react-native";

export default function Perfil() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
        <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/binoculo.png")} />
          <Text style={styles.Texto}>Login</Text>
          <View style={styles.inputView, styles.email}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.senha}>
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

          <TouchableOpacity style={styles.Entrar}>
            <Text>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.cadastre}>Novo por aqui? Cadastre-se.</Text>
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
    marginBottom: 140,
    width: 150,
    height: 150,
  },

  cadastre: {
    marginTop: 50,
    fontWeight: "bold",
  },

  email: {
    backgroundColor: "#F8F8FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 50,

  },
  
  TextInput: {
    fontWeight: "bold",
  },

  senha: {
    backgroundColor: "#F8F8FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  Texto: {
    marginLeft: 30,
    marginRight: 180,
    marginVertical: 40,
    fontSize: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },


  forgot_button: {
    marginBottom: 30,
    fontWeight: "bold",

  },

  Entrar: {
    width: "35%",
    fontWeight: "bold",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
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