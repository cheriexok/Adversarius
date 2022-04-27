import React, { useState, useEffect } from 'react';
import { Image, Button, ImageBackground, ScrollView, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WhiteButton from "../assets/functions/WhiteButton";

export default function Login({ navigation }) {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState(null);

    //Fazer Login
    async function doLogin() {
        let reqs = await fetch(config.urlRootPhp + 'Controller.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password
            })
        });
        let ress = await reqs.json();
        Keyboard.dismiss();
        if (ress) {
            navigation.navigate('Home');
        } else {
            setMessage('Usuário ou senha inválidos');
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../assets/imgs/background.png')} resizeMode="cover" style={styles.imageB} >
                {message && (
                    <Text style={styles.Texto} >{message}</Text>
                )}
               
                <Text style={styles.Texto}>Login</Text>

                <TextInput
                    style={styles.TextI}
                    placeholder="Usuário"
                    placeholderTextColor="#ccc"
                    onChangeText={(text) => setUser(text)}
                />
                <Separator />
                <TextInput
                    style={styles.TextI}
                    placeholder="Senha"
                    placeholderTextColor="#ccc"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Separator />

                <View style={styles.botao}>
                    <WhiteButton text="Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />
                </View>

                <Separator />
                <Separator />
                <Separator />

                <View style={styles.button}>
                    <View style={styles.buttonText}>
                        <WhiteButton text="Entrar" onPress={() => navigation.navigate('')} />
                    </View>
                </View>

                {/*<TouchableOpacity onPress={() => (navigation.navigate('TelaInicial'))}><Text>Fingir Login</Text></TouchableOpacity>*/}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    kk: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    botao: {
        paddingLeft: '11%',
        fontSize: 18,

    },
    button: {
        borderRadius: 25,
        paddingVertical: 8,
        marginHorizontal: '30%',
        backgroundColor: 'white',
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