import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { useEffect, useState } from 'react';
import CardPelicula3 from '../../Components/CardPelicula3';

export default function ListaPeliculas3Screen() {

    const [datosPE, setDatosPe] = useState([]);



    async function leerPeliculas3() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/peliculas3.json');
        const json = await resp.json();
        setDatosPe(json.peliculas);
    }

    useEffect(() => {
        leerPeliculas3()


    }, [])


    return (
        <View>
            <Text style={styles.titulo}>Lista de Peliculas 3</Text>

            <FlatList
                data={datosPE}
                renderItem={({ item }) =>

                    <CardPelicula3 informacion={item} />

                }>
            </FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:30,
        marginVertical:10,
        textAlign:"center"
    }
})