import React,{useState,useEffect} from 'react';
import {Image, Button, ImageBackground, ScrollView, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WhiteButton from "../assets/functions/WhiteButton";

export default function Login({navigation}) {

    const [user,setUser]=useState(null);
    const [password,setPassword]=useState(null);
    const [message,setMessage]=useState(null);

    //Fazer Login
    async function doLogin()
    {
        let reqs = await fetch(config.urlRootPhp+'Controller.php',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password
            })
        });
        let ress = await reqs.json();
        Keyboard.dismiss();
       if(ress){
           navigation.navigate('Home');
       }else{
            setMessage('Usuário ou senha inválidos');
            setTimeout(()=>{
                setMessage(null);
            },3000);
       }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../assets/imgs/background.png')} resizeMode="cover" style={styles.imageB} >              
                {message &&(
                    <Text style={styles.Texto} >{message}</Text>
                )}
                <View style={styles.kk}>
                    <Image source={require('../assets/imgs/binoculo.png')} style={styles.image} resizeMode='stretch' ></Image>
                </View>
                <Text style={styles.Texto}>Login</Text>
                
                <TextInput
                    style={styles.TextI}
                    placeholder="USUÁRIO"
                    placeholderTextColor="#ccc"
                    onChangeText={(text)=>setUser(text)}
                />
                <Separator/>
                <TextInput
                    style={styles.TextI}
                    placeholder="SENHA"
                    placeholderTextColor="#ccc"
                    secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}
                />
                <Separator/>    
                <Separator/>    
                <Separator/>    
                <WhiteButton text="Entrar" onPress={() => navigation.navigate('')}/>
                <Separator/>
                <WhiteButton text="Cadastre-se" onPress={() => navigation.navigate('Cadastro')}/> 
            </ImageBackground>       
        </View>
    );
}

const styles = StyleSheet.create({
    kk:{
        justifyContent:'center',
        alignItems:'center',
    },  

    image: {
        justifyContent:'center',
        alignItems:'center',
        //marginBottom:100,
        width: 150,
        height: 150,
    },

    imageB: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    
    separator: {
      marginVertical: 10,

    },

    Texto: {
      marginBottom: '10% ',
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
    }

});

const Separator = () => (
    <View style={styles.separator} />
  );