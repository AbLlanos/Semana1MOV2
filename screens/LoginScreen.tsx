import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Entypo from '@expo/vector-icons/Entypo';

export default function LoginScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={[{ fontSize: 50 }, styles.txt]}>LoginScreen</Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Tabs")}>

                <View style={styles.fila}>

                    <Text style={[styles.txt, { fontSize: 15 }]}>Ir a Calculadora</Text>
                    <Entypo style={{ alignSelf: "center" }} name="login" size={30} color="black" />

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
        backgroundColor: "#fb7c28",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    txt: {
        color: "white",
        marginBottom:10,
    },

    btn: {
        width: "60%",
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center",
        backgroundColor: "#800000",
        padding: 10,
        borderRadius: 20,
    },

    img: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        resizeMode: 'cover',

    },

    fila: {
        flexDirection: 'column',
        alignItems: "center",
    }



})