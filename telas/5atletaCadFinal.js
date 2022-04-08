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
export default function Atletacadfinal() {
  const [tel, setTel] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
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
              placeholder="Peso"
              placeholderTextColor="black"
              onChangeText={(peso) => setPeso(peso)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Altura"
              placeholderTextColor="black"
              onChangeText={(altura) => setAltura(altura)}
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

          <TouchableOpacity style={styles.Entrar}>
            <Text style={styles.bold}>Criar</Text>
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

  Entrar: {
    width: "35%",    
    fontWeight: "bold",
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
    fontWeight: "bold",
    
  },
  bold: {
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
