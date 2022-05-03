import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Exibepeneira() {
  const [nome, setNome] = useState("");
  const [esporte, setEsporte] = useState("");
  const [valor, setValor] = useState("");
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
        <View >

          <Text onChangeText={(nome) => setNome(nome)} style={styles.title}>Peneira JEC!</Text>

          <View style={styles.row}>
            <Image style={styles.image} source={require("../assets/imgs/boneco.png")} /> 
            <Text onChangeText={(esporte) => setEsporte(esporte)} style={styles.title2}>Futebol</Text>
            <Text onChangeText={(valor) => setValor(valor)} style={styles.title4}>R$ 15,00</Text> 
          </View>

          <Text onChangeText={(localizacao) => setLocalizacao(localizacao)} style={styles.title3}>Localização: Rua Falberto 196,Fatima , LOLO Camp</Text>

          <Text onChangeText={(data) => setData(data)} style={styles.title3}>Data: 15/05/2022</Text>

          <Text onChangeText={(hora) => setHora(hora)} style={styles.title3}>Hora: 9:00</Text>

          <Text onChangeText={(ndp) => setNdp(ndp)} style={styles.title3}>Número de participantes: 110.</Text>

          <Text onChangeText={(ndt) => setNdt(ndt)} style={styles.title3}>Número de times: 10.</Text>

          <Text onChangeText={(idade) => setIdade(idade)} style={styles.title3}>Idade: 14 anos.</Text>

          <Text onChangeText={(descricao) => setDescricao(descricao)} style={styles.title3}>Estamos procurando jovens talentos
sub-15 para se desenvolver como futuro do JEC, os times serão montados aleatoriamente, e os jogadores avaliados individualmente.</Text>


        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingLeft: "25%",
    paddingRight: "25%",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    backgroundColor: "#B8EE5A",
  },

  title2: {
    marginLeft: '60%',
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
  },

  title3: {
    marginLeft: '10%',
    fontSize: 18,
    marginBottom: 25,
    fontWeight: "bold",
  },
  title4: {
    marginLeft: '60%',
    fontSize: 25,
    marginBottom: 40,
    fontWeight: "bold",
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",


  },
  flx: {
    flex: 2,
  },
  image: {
    marginBottom: 0,
    width: 80,
    height:80,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

