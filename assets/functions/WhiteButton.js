import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
 
export default function WhiteButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View >
                <Text style={styles.buttonTexto}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        paddingVertical: 5,
        marginHorizontal: '30%',
        backgroundColor: 'white',   
    },
    buttonTexto: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});