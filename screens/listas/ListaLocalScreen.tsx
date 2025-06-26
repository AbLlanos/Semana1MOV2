import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import datos from "../../assets/data/characters.json"
import React, { useState } from 'react'
import Tarjeta from '../../Components/Tarjeta'


export default function ListaLocalScreen() {


    /*
    const [lista, setlista] = useState([
        {
            "cedula": "1111111111",
            "nombre": "JuanPerez",
            "edad": 34
        },
        {
            "cedula": "1132323232",
            "nombre": "Juan Diaz",
            "edad": 36
        },
        {
            "cedula": "1123123213",
            "nombre": "Miguel Sanchez",
            "edad": 26
        },
        {
            "cedula": "1132123467",
            "nombre": "Maria Carmen",
            "edad": 90
        },
    ])

    */
    //´Para que funcione flat lists noecestio data y drender inte
    /*
                        <View>
    
                            <Text style={styles.txt}>{item.name.first}</Text>
    
                            <Text style={styles.txt}>{item.gender}</Text>
    
                            <Text style={styles.txt}>{item.age}</Text>
    
                            <Text style={styles.txt}>{item.homePlanet}</Text>
    
                            <Image style={styles.img} source={{uri: item.images.main}}></Image>
    
                        </View>
    */

    return (
        <View style={styles.container}>
            <Text>Lista Local</Text>

            <FlatList
                data={datos}
                renderItem={({ item }) =>

                    <Tarjeta informacion = {item}/>

                }>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "",

    },
    txt: {
        fontSize: 25,
    },
    img: {
        width: 100,
        height: 100,
    }


})