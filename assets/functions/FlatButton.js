import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
 
export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#88D26D',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center',
    }
});