import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {

    //console.log(props.informacion.name.first)

    function mostrarMas(data: any) {

        Alert.alert("Informacion", data.name.first + "trabaja como" + data.occupation)




    }


    return (

        <TouchableOpacity style={styles.btn} onPress={() => mostrarMas(props.informacion)}>


            <View style={styles.cuadro}>

                <Image style={styles.img} source={{ uri: props.informacion.images.main }}></Image>
                <Text>{props.informacion.name.second}</Text>

                <View style={styles.cuadro2}>
                    <Text style={styles.titulo}>Datos del personaje</Text>
                    <Text style={styles.txt}>Nombre Completo: {props.informacion.name.first} {props.informacion.name.last}</Text>
                    <Text style={styles.txt}>Genero: {props.informacion.gender}</Text>
                    <Text style={styles.txt}>Planeta: {props.informacion.homePlanet}</Text>
                    <Text style={styles.txt}>Ocupation: {props.informacion.occupation} </Text>


                </View>
            </View>


        </TouchableOpacity >

    )
}

//contianer para uqe cubra todo

const styles = StyleSheet.create({

    cuadro: {
        flexDirection: 'row',
        padding: 10,
    },

    cuadro2: {
        flexDirection: 'column',
        justifyContent: "center",
        backgroundColor: "#008fdb",
        flex:1,
        gap:5
    },


    img: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        alignSelf: "flex-start",
        backgroundColor: "#0098eb",
    },
    txt: {
        fontSize: 15,
        paddingLeft:5,
        backgroundColor: "#5deee9"
    },
    btn: {
        margin: 10,
        backgroundColor: "#ffca99"
    },
    titulo: {
        fontSize: 20,
        alignSelf: "center",
        backgroundColor: "#c0fcfa",
        borderRadius:20,
    },
})