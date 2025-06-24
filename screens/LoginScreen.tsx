import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Entypo from '@expo/vector-icons/Entypo';

export default function LoginScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={[{ fontSize: 50 }, styles.txt]}>LoginScreen</Text>

            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Calculadora")}>

                <View style={styles.fila}>

                    <Text style={[styles.txt, { fontSize: 15 }]}>Ir a Calculadotra</Text>
                    <Entypo name="login" size={24} color="black" />

                    <Image style={styles.img} source={require("../assets/images/01.png")}  ></Image>

                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    //aligin imtes de izquierda a deracha
    //justific content de arriba ahacia abajo
    //btn de vboton
    //txt de texto
    container: {
        flex: 1,
        backgroundColor: "#755400",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    txt: {
        color: "white",
    },

    btn: {
        width: "30%",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        padding: 10,
    },

    img: {
        width: "90%",
        height: 80,
        objectFit: 'cover',
        resizeMode: 'cover',
    },

    fila: {
        flexDirection: 'column'
    }



})