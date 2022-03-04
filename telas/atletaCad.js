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

export default function Atletacad() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/log2.png")} />

     <Text style={styles.title}>Informe seus dados!</Text>

      <StatusBar style="auto" />
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
        <Text style={styles.loginText}>Próximo</Text>
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
