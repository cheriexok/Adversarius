import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Button } from "react-native";
import WhiteButton from "../assets/functions/WhiteButton";
import db from '../src/config/firebase';
import { auth } from '../src/config/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

export default function Peneira({ navigation }) {

  
  const [Sport, setSport] = useState(['Futebol','Voley','Tennis']);
  const [esporte, setEsporte] = useState('Sport')

  const [endereço, setEndereço] = useState("");
  const [participantes, setPartipantes] = useState("");
  const [times, setTimes] = useState("");
  
  
 /* const [isLoading, setIsloading] = useState(false);

  const [user, setUser] = useState({});

  const setDataIdUsuario = async (valor) => {
    const teste = await AsyncStorage.setItem('usuario_id', valor)
    // navigation.navigate('Inicial')

  }

  const request = async () => {
    createUserWithEmailAndPassword(auth, participantes, times)
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
  }



  const insertData = async (user_temp) => {
    await setDoc(doc(db, "CriarPeneira", user_temp.uid), {
      esporte: esporte,
      endereço: endereço,
      participantes: participantes,
      times: times,
    });
    setIsloading(false);
    navigation.navigate('Continuar', {
      paramKey: user_temp.uid
    })
  }

  useEffect(() => {

  }, [endereço])*/
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../assets/imgs/background2.png')} resizeMode="stretch" style={styles.image} >
          <Text style={styles.Texto}>Crie sua peneira!</Text>
          <View >
            <Picker
              style={styles.TextI}
              esporte={esporte}
              onValueChange={(itemValue, itemIndex) =>
                setEsporte(itemValue)
              }
              >
                {Sport.map(cr => {
                    return <Picker.Item label={cr} value={cr} />
                  })}
            </Picker>
            <Separator/>
            <TextInput
              placeholder="Endereço"
              style={styles.TextI}
              onChangeText={(endereço) => setEndereço(endereço)}
            />
            <Separator/>
            <TextInput
              placeholder="Número de participantes"
              style={styles.TextI}
              onChangeText={(participantes) => setPartipantes(participantes)}
            />
            <Separator/>
            <TextInput
            placeholder="Número de times"
            style={styles.TextI}
            onChangeText={(times) => setTimes(times)}
          />
          <Separator />

            <View style={styles.button}>
            <View style={styles.buttonText}>
            <WhiteButton text="Próximo"  onPress={() => navigation.navigate('Continuar')}/>
            </View>
            </View>
 
          </View>
        </ImageBackground>   
      </View>
    );
  }

  const styles = StyleSheet.create({
      image: {
          flex: 1,
          justifyContent: "center",
          width: '100%',
          height: '100%',
      },
      
      separator: {
        marginVertical: 10,
        borderBottomColor: '#ADE76A',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

      Texto: {
        marginBottom: '30% ',
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: '5%'
      },

      TextI: {
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: '10%',
      },
      botao: {
        paddingLeft: '11%',
        fontSize: 18,
    
      },
      button: {
        borderRadius: 25,
        paddingVertical: 5,
        marginHorizontal: '30%',
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

  const Separator = () => (
    <View style={styles.separator} />
  );