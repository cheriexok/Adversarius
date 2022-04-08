import React,{useState,useEffect} from 'react';
import {Image, Button, ImageBackground, ScrollView, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <View>
                <View >
                </View>

                <View >
                    {message &&(
                        <Text >{message}</Text>
                    )}
                    <TextInput
                            
                            placeholder="Usuário:"
                            placeholderTextColor="#ccc"
                            onChangeText={(text)=>setUser(text)}
                    />
                    <TextInput
                            
                            placeholder="Senha:"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            onChangeText={(text)=>setPassword(text)}
                    />
                    <TouchableOpacity onPress={doLogin} >
                        <Text >Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity
                           
                            onPress={()=>navigation.navigate('Cadastro')}
                    >
                        <Text >Não tem conta? Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

        </View>
    );
}

