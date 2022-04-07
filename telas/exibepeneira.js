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

export default function Exibepeneira() {
  const [nome, setNome] = useState("");
  const [esporte, setEsporte] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [ndp, setNdp] = useState("");
  const [ndt, setNdt] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/imgs/background.png')} style={styles.imageBackground}>
      <View style={styles.container}>
       
        <Text onChangeText={(tel) => setTel(tel)} style={styles.title}>Peneira JEC!</Text>

        <Text style={styles.title}>Informe seus dados!</Text>
      


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

  title: {
    marginLeft: 30,
    marginRight: 180,
    fontSize: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

   title2: {
        marginLeft: 30,
        marginRight: 180,
        fontSize: 25,
        marginBottom: 50,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
  },

  title3: {
    marginLeft: 30,
    marginRight: 180,
    fontSize: 16,
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

