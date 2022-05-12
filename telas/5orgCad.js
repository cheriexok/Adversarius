import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Button } from "react-native";
import WhiteButton from "../assets/functions/WhiteButton";
import db from '../src/config/firebase';
import { auth } from '../src/config/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function AtletaCad({ navigation }) {
  const [nome, onChangeNome] = useState("");

  const [email, onChangeEmail] = useState("");

  const [senha, onChangeSenha] = useState("");

  const [cpf, onChangeCpf] = useState("");

  const [isLoading, setIsloading] = useState(false);

  const [user, setUser] = useState({});

  const setDataIdUsuario = async (valor) => {
    const teste = await AsyncStorage.setItem('usuario_id', valor)
    // navigation.navigate('Inicial')

  }

  const request = async () => {

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const newUser = userCredential.user
        setDataIdUsuario(newUser.uid)
        updateProfile(newUser, {
          displayName: nome
        })
        setUser(newUser)
        insertData(newUser)
        // navigation.navigate('Finalize', insertData())
      }).catch((error) => {
        console.log(error);

      })



    // const querySnapshot = await getDocs(
    //   collection(db, "CadastroAtl")
    // );

    // querySnapshot.forEach(
    //   (doc) => {
    //     console.log(doc.data());
    //   }
    // );
  }



  const insertData = async (user_temp) => {
    await setDoc(doc(db, "CadastroOrg", user_temp.uid), {
      nome: nome,
      email: email,
      senha: senha,
      cpf: cpf,
    });
    setIsloading(false);
    navigation.navigate('Complemente', {
      paramKey: user_temp.uid
    })
  }

  useEffect(() => {

  }, [email])

  return (
    <View style={styles.flx}>
      <ImageBackground source={require('../assets/imgs/background.png')} style={styles.imageBackground}>
        <View style={styles.container}>

          <Text style={styles.title}>Informe seus dados!</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Nome"
              placeholderTextColor="black"
              onChangeText={onChangeNome}
              value={nome}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="E-mail"
              placeholderTextColor="black"
              onChangeText={onChangeEmail}
              value={email}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Senha"
              placeholderTextColor="black"
              secureTextEntry={true}
              onChangeText={onChangeSenha}
              value={senha}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="CPF"
              placeholderTextColor="black"
              onChangeText={onChangeCpf}
              value={cpf}
            />
          </View>

          <View style={styles.button}>
            <View style={styles.buttonText}>
              <WhiteButton text="Próximo" onPress={request} />
            </View>

          </View>

          <View style={styles.botao}>
            <WhiteButton text="Já tem uma conta? Entre." onPress={() => navigation.navigate('Login')} />
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
  botao: {
    paddingLeft: '11%',
    fontSize: 18,

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

