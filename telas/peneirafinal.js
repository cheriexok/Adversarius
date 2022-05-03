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
import WhiteButton from "../assets/functions/WhiteButton";

export default function Peneirar({ navigation }) {
  const [np, setNp] = useState("");
  const [des, setDes] = useState("");
  

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/imgs/background.png')} style={styles.imageBackground}>
        <View style={styles.container}>

          <Text style={styles.title}>Complemente os dados!</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Nome da peneira"
              placeholderTextColor="black"
              onChangeText={(np) => setNp(np)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Descrição"
              placeholderTextColor="black"
              onChangeText={(des) => setDes(des)}
            />
          </View>

          <View style={styles.button}>
            <View style={styles.buttonText}>
              <WhiteButton text="Criar" onPress={() => navigation.navigate('Select')} />
            </View>
          </View>

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
    fontSize: 18,

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
  },
  botao: {
    paddingLeft: '11%',
    fontSize: 18,

  },
  button: {
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    marginBottom: 60,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});
