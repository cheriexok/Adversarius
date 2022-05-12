import React, {useState} from "react";
import {Text, View, ImageBackground, StyleSheet, TextInput } from 'react-native';
import WhiteButton from "../assets/functions/WhiteButton";


export default function Peneira({ navigation }) {
  
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [idade_min, setIdade] = useState("");
  const [valor, setValor] = useState("");


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../assets/imgs/background2.png')} resizeMode="stretch" style={styles.image} >
          <Text style={styles.Texto}>Complemente os dados</Text>
          <View >
          
            
        
            <Separator/>
            <TextInput
              placeholder="Idade para participar"
              style={styles.TextI}
              onChangeText={(data) => setData(data)}
            />
            <Separator/>
            <TextInput
              placeholder="Custo para participar"
              style={styles.TextI}
              onChangeText={(hora) => setHora(hora)}
            />
            <Separator/>
            <TextInput
            placeholder="Data"
            style={styles.TextI}
            onChangeText={(idade_min) => setIdade(idade_min)}
          />
          <Separator />
          <TextInput
            placeholder="Hora"
            style={styles.TextI}
            onChangeText={(valor) => setValor(valor)}
          />
          <Separator />

            <View style={styles.button}>
            <View style={styles.buttonText}>
            <WhiteButton text="Próximo" onPress={() => navigation.navigate('Peneirar')}/>
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