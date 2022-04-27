import React, { useState } from "react";
import {
  StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity,
} from "react-native";
import WhiteButton from "../assets/functions/WhiteButton";
import FlatButton from "../assets/functions/FlatButton";

export default function Cad({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/imgs/background.png')} style={styles.imageBackground}>
        <View style={styles.container}>
          <Text style={styles.Texto}>Olá, novo por aqui?
Crie sua conta!</Text>




          <View style={styles.button}>
            <View style={styles.buttonText}>
              <WhiteButton text="Organizador" onPress={() => navigation.navigate('Organização')} />
            </View>
          </View>

          <View style={styles.button}>
            <View style={styles.buttonText}>
              <WhiteButton text="Atleta" onPress={() => navigation.navigate('Atleta')} />
            </View>
          </View>

          <TouchableOpacity style={styles.Entre}>
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
  Texto1: {
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
  },
  botao: {
    paddingLeft: '11%',
    fontSize: 18,

  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: '30%',
    backgroundColor: 'white',
    marginBottom: 20,
    //marginLeft: 15,
    //marginRight: 15,

  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});


