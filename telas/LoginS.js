import { Image, Button, ImageBackground, ScrollView, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WhiteButton from "../assets/functions/WhiteButton";
import { db, auth } from '../src/config/firebase';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from "@firebase/firestore";


export default function Login({ navigation }) {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [idDoUsuario, setIdDoUsuario] = useState()

    const setDataIdUsuario = async (valor) => {
        const usuario_id = await AsyncStorage.setItem('usuario_id', valor)
        navigation.navigate('TelaInicial')
        return usuario_id
    }

    //setDoc(doc(db, "CadastroAtl", user_temp.uid),

    const getUserId = async () => {
        return await AsyncStorage.getItem("usuario_id");
    };

    const request = async () => {
        console.log("Comecei o REquest")
        console.log(email, senha)
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log('deu certo')
                const user = userCredential.user;
                getDoc(doc(db, "CadastroOrg", user.uid)).then((a) => {
                    if (a.exists()) {
                        AsyncStorage.setItem('tipoUsuario', 'org').then(() => { return true })
                    }
                });
                getDoc(doc(db, "CadastroAtl", user.uid)).then((a) => {
                    if (a.exists()) {
                        AsyncStorage.setItem('tipoUsuario', 'atl').then(() => { return true })
                    }
                });
                return setDataIdUsuario(user.uid)
                //navigation.navigate('TelaInicial')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../assets/imgs/background.png')} resizeMode="cover" style={styles.imageB} >
                {/* {message && (
                    <Text style={styles.Texto} >{message}</Text>
                )} */}

                <Text style={styles.Texto}>Login</Text>

                <TextInput
                    style={styles.TextI}
                    placeholder="E-mail"
                    placeholderTextColor="#ccc"
                    onChangeText={setEmail}
                />
                <Separator />
                <TextInput
                    style={styles.TextI}
                    placeholder="Senha"
                    placeholderTextColor="#ccc"
                    secureTextEntry={true}
                    onChangeText={setSenha}
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
                        <WhiteButton text="Entrar" onPress={request} />
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