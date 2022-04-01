import React from "react";
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import FlatButton from "../assets/functions/FlatButton";

/*const image = {require(./imgs/background2.png)}*/

export default function SelectS({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../assets/imgs/background2.png')} resizeMode="stretch" style={styles.image} >
          <Text style={styles.Texto}>O que você está procurando?</Text>
          {/*<Button title="Campeonatos" onPress={() => navigation.push('Camps')} color="#88D26D" />
          <Button title="Peneiras" onPress={() => navigation.navigate('Peneiras')} color="#88D26D" ><Text>Peneiras</Text> </Button>
          <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
          />*/}
          <View style={styles.Fbutton}>
            <FlatButton text="Campeonatos" onPress={() => navigation.push('Camps')}/>
            <Separator/>
            <FlatButton text="Peneiras" onPress={() => navigation.navigate('Peneiras')}/>
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
        marginVertical: 30,
        borderBottomColor: '#ADE76A',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

      Fbutton: {
       marginHorizontal: '10%',
      },

      Texto: {
        marginBottom: '30% ',
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: '5%'
      }

  });

  const Separator = () => (
    <View style={styles.separator} />
  );