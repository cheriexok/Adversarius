import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
import WhiteButton from "../assets/functions/WhiteButton";
import db from '../src/config/firebase';
import { addDoc, collection, getDocs, setDoc, doc, docRef, updateDoc } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Atletacadfinal({ navigation }) {
  const [telefone, setTel] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [data_nasc, setDtnasci] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [userId, setUserId] = useState(false);


  const getUserId = async () => {
    const usuario_id = await AsyncStorage.getItem("usuario_id").then(res => {
      setUserId(res)
      console.log(res);

    });
  };


  const request = async () => {
    const querySnapshot = await getDocs(
      collection(db, "CadastroAtl")
    );

    querySnapshot.forEach(
      (doc) => {
        console.log(doc.data());
      }
    );
  }


  const insertData = async () => {
    //setIsloading(true);
    console.log(userId)
    const contDocRef = doc(db, "CadastroAtl", userId);

    await updateDoc(contDocRef, {
      telefone: telefone,
      peso: peso,
      altura: altura,
      data_nasc: data_nasc,
      souAtleta: true,
    }).then(() => {
      console.log("Document written with ID: ", userId);
      setIsloading(false);
      navigation.navigate('Login')
    });


  }

  useEffect(() => {

  }, [telefone])
  useEffect(() => {
    getUserId()
    if (userId != false) {
      // insertData();
    }
  }, [userId])


  return (

    <View style={styles.flx}>
      <ImageBackground source={require('../assets/imgs/background.png')} style={styles.imageBackground}>
        <View style={styles.container}>


          <Text style={styles.title}>Complete seu cadastro!</Text>

          <StatusBar style="auto" />
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

          <View style={styles.button}>
            <View style={styles.buttonText}>
              {/* <WhiteButton text="Cadastrar" onPress={() => navigation.navigate('TelaInicial', insertData())} /> */}
              <WhiteButton text="Cadastrar" onPress={insertData} />
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
  botao: {
    paddingLeft: '11%',
    fontSize: 18,

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