import React from "react";
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import WhiteButton from "../assets/functions/WhiteButton";
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'AdversariusDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);


export default function Perfil() {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ImageBackground source={require('../assets/imgs/background3.png')} resizeMode="stretch" style={styles.image}>
        <View style={styles.image2.input}>

          <Image source={require('../assets/imgs/trofeu.png')} resizeMode='cover' style={styles.logo} />
        </View>
        <Separator />
        <Separator />

        <TextInput
          style={styles.text}
          placeholderTextColor="#003f5c"
        ></TextInput>
        <Separator />
        <TextInput
          style={styles.text}
          placeholderTextColor="#003f5c"
        ></TextInput>
        <Separator />
        <TextInput
          style={styles.text}
          placeholderTextColor='#003f5cs'
        ></TextInput>
        <Separator />
        <WhiteButton
          text='Alterar Senha'
          placeholderTextColor="#003f5c"
        />
        <Separator />
        <WhiteButton
          text='Histórico'
          placeholderTextColor="#003f5c"
        />

      </ImageBackground>
    </View>

  )
}


const styles = StyleSheet.create({


  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',


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
    //paddingVertical: 12,
    //paddingHorizontal: 12,
    fontWeight: 'bold',
    textTransform: '',
    fontSize: 20,
    //textAlign: 'center',
  }

})

const Separator = () => (
  <View style={styles.separator} />
)