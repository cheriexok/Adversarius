import React, {useState} from "react";
import {Text, View, ImageBackground, StyleSheet, TextInput } from 'react-native';
import WhiteButton from "../assets/functions/WhiteButton";
import { Picker } from "@react-native-picker/picker";

export default function CriaPCS({ navigation }) {

  const [Sport, setSport] = useState(['Futebol','Voley','Tennis']);
  const [selectsport, setSelectSport] = useState('Sport')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../assets/imgs/background2.png')} resizeMode="stretch" style={styles.image} >
          <Text style={styles.Texto}>Crie sua peneira!</Text>
          <View >
            <Picker
              style={styles.TextI}
              selectsport={selectsport}
              onValueChange={(itemValue, itemIndex) =>
                setSelectSport(itemValue)}
              >
                {Sport.map(cr => {
                    return <Picker.Item label={cr} value={cr} />
                  })}
            </Picker>
            <Separator/>
            <TextInput
              placeholder="Endereço"
              style={styles.TextI}
            />
            <Separator/>
            <TextInput
              placeholder="Número de participantes"
              style={styles.TextI}
            />
            <Separator/>

            <View style={styles.button}>
            <View style={styles.buttonText}>
            <WhiteButton text="Próximo" onPress={() => navigation.navigate('Finalizar')}/>
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
        textTransform: 'uppercase',
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