import React, { useState } from "react";
import { View, Text, ImageBackground, Image, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import WhiteButton from "../assets/functions/WhiteButton";
import { Picker } from '@react-native-picker/picker';






export default function Home({navigation}) {

  const [Sport, setSport] = useState(['Futebol', 'Voley', 'Tennis']);
  const [selectsport, setSelectSport] = useState('Sport')
  const [isWorking, setIsWorking] = useState(false)
  const muda = () => {
    setIsWorking(true)
  }
  return (

    <View>
      <View style={styles.image}>
        <Separator />
        <Separator />
        <Separator />
        <Picker
          style={styles.new}
          selectsport={selectsport}
          onValueChange={(itemValue, itemIndex) =>
            setSelectSport(itemValue)}
        >
          {Sport.map(cr => {
            return <Picker.Item key={cr} label={cr} value={cr} />
          })}
        </Picker>
        <Separator />

        <TextInput
          style={styles.new2}
          placeholder='localização'
        />
        <Separator />
        <Separator />
        <Separator />

        <View style={styles.botao}>
          <WhiteButton
            text='Buscar'
            onPress={muda}
          />
        </View>

      </View>
      <View style={styles.vi}>
        {isWorking && (
          <View style={styles.block} id="informacao">
            <View>
              <Image source={require('../assets/imgs/futebol.png')} style={styles.atleta} resizeMode='stretch' />
              <Text style={styles.tit}>Peneira JEC</Text>
              <Text style={styles.loc}>Localização: Rua Max Colin 118, Glória.</Text>
              <Text style={styles.val}>Valor: R$15,00</Text>
              <View style={styles.button}>
                <WhiteButton text="mais+" onPress={() => navigation.navigate('Exibe')} />
              </View>
              <View style={styles.line}></View>
            </View>
          </View>
        )}

        {!isWorking && (
          <View style={styles.block}>
            <Image source={require('../assets/imgs/lupa.png')} style={styles.lupa} resizeMode='stretch ' />
            <Text style={styles.tlp}>Nada Econtrado</Text>

            <Text></Text>
          </View>
        )}

      </View>


    </View>

  );

}

// function mudarDisplay() {
//   document.getElementById("lupa").style.display = "none";
// }


const styles = StyleSheet.create({

  inf: {
    fontSize: 18,
    paddingLeft: '70%',
    marginTop: -20,
    color: '#88D26D',
  },

  val: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 30,
    fontWeight: "bold"
  },

  loc: {
    fontSize: 17,
    marginLeft: 100,
    marginTop: 17,
    fontWeight: "bold",
  },

  line: {
    //width:'0%',
    //height:'1%',
    marginTop: 7,
    paddingHorizontal: 200,
    backgroundColor: 'black',
    paddingTop: 1,
    alignItems: 'center',

  },

  tit: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 150,
    marginTop: 20,
  },

  atleta: {
    width: 70,
    height: 70,
    marginLeft: 15,
    marginVertical: -120,
  },

  block: {
    display: 'block',
  },

  none: {
    display: 'none',
  },


  tlp: {
    fontSize: 18,
    color: '#AEAEAE'
  },

  vi: {
    paddingTop: 150,
    alignItems: 'center',
  },

  lupa: {
    width: 120,
    height: 120,


  },

  bottom: {
    backgroundColor: 'white',
    height: 30,
    width: 130,

  },

  new: {
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 95,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: '10%',
  },
  button: {
    paddingLeft: '75%',
    color: '#B8EE5A',
    fontSize: 16,
    paddingTop:-20,
  },
  botao: {
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: '6%',
    backgroundColor: '#5BB600',
    //marginBottom: 60,
  },

  new2: {
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    //textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: '10%',
  },

  image: {
    paddingBottom: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#B8EE5A',


  },

  logo: {
    height: 130,
    width: 130,
  },

  image2: {
    flex: 1,
    alignItems: 'center',
    marginTop: '55%',

  },

  text: {

    backgroundColor: '#D1F62D',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    textTransform: '',
    fontSize: 20,
    textAlign: 'center',



  },

  input: {
    marginBottom: '115%',
  },
  separator: {
    marginVertical: 10,

  },

  text2: {

    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    textTransform: '',
    fontSize: 20,
    textAlign: 'center',
  }

})

const Separator = () => (
  <View style={styles.separator} />
)