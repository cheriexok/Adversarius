import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function OrgCad() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/binoculo.png")} />
        <Text style={styles.title}>Informe seus dados!</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Nome"
            placeholderTextColor="black"
            onChangeText={(nome) => setNome(nome)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="black"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(senha) => setSenha(senha)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="CPF"
            placeholderTextColor="black"
            onChangeText={(cpf) => setCpf(cpf)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text>Próximo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Já tem uma conta? Entre.</Text>
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

  inputView: {
    backgroundColor: "#F8F8FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    fontWeight: "bold",

  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: "bold",

  },

  forgot_button: {
    fontWeight: "bold",

  },

  loginBtn: {
    width: "35%",
    fontWeight: "bold",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "#F8F8FF",

  },

  title: {
    marginLeft: 30,
    marginRight: 180,
    fontSize: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",


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

