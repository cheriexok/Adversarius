import React, { useState, useEffect } from 'react';
import { Image, Button, ImageBackground, ScrollView, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export default function Home({ navigation, route }) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             let user = JSON.parse(value);
            //             setEmail(user.email);
            //             setPassword(use.password);
            //         }
            //     })
            db.transaction((tx)=>{
                tx.executeSql(
                    "SELECT Email, Password FROM Users",
                    [],
                    (tx, results)=>{
                        var len = results.rows.length;
                        if(len>0){
                            var userEmail = results.rows.item(0).Email;
                            var userPassword = results.rows.item(0).Password;
                            setEmail(userEmail);
                            setPassword(userPassword);
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../assets/imgs/background.png')} resizeMode="cover" style={styles.imageB} >
                {message && (
                    <Text style={styles.Texto} >{message}</Text>
                )}
                <View style={styles.kk}>
                    <Image source={require('../assets/imgs/login.png')} style={styles.image} resizeMode='stretch' ></Image>
                </View>
                <Text style={styles.Texto}>Login</Text>
                <Separator />
                <TextInput
                    style={styles.TextI}
                    placeholder="EMAIL"
                    placeholderTextColor="#ccc"
                    onChangeText={(text) => setEmail(text)}
                />
                <Separator />
                <Separator />

                <TextInput
                    style={styles.TextI}
                    placeholder="SENHA"
                    placeholderTextColor="#ccc"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Separator />
                <Separator />
                <Separator />
                <Separator2 />
                <WhiteButton text="Entrar" onPress={() => navigation.navigate('')} />
                <Separator />
                <WhiteButton text="Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />

                <Separator2 />
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

    separator2: {
        marginVertical: 35,

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

const Separator2 = () => (
    <View style={styles.separator2} />
);