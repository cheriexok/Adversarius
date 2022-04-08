import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function Orgcadfinal() {
  const [tel, setTel] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [dtnasci, setDtnasci] = useState("");

  return (
    <View style={styles.flx}>
    <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/binoculo.png")} />
     <Text style={styles.title}>Complete seu cadastro!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Telefone"
          placeholderTextColor="black"
          onChangeText={(tel) => setTel(tel)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="CNPJ"
          placeholderTextColor="black"
          onChangeText={(cnpj) => setCnpj(cnpj)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Data de nascimento"
          placeholderTextColor="black"
          onChangeText={(dtnasci) => setDtnasci(dtnasci)}
        />
      </View>
       
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Criar</Text>
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
  
  loginText: {
    fontWeight: "bold",
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
    height: 30,
    marginBottom: 30,
    fontWeight: "bold",
    marginTop: 40,
  },

  loginBtn: {
    width: "35%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F8F8FF",
    fontWeight: "bold",

  },
  
  title: {
    height: 50,
    fontSize: 28,
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
