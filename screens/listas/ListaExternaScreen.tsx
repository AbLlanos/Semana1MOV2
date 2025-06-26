import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card';


export default function ListaExternaScreen() {

  const [datos, setdatos] = useState([])

  async function leer() {
    const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
    const json = await resp.json();
    setdatos(json);
  }

  useEffect(() => {
    leer()
    console.log(datos)

  }, [])

  return (
    <View >
      <Text >Lista Externa</Text>
      <SectionList
        sections={datos}

        renderItem={({ item }) => (
          <View>
            <Card informacion={item} />
          </View>
        )}
        renderSectionHeader={({ section : {title} }: any) => (
          <Text style={{fontSize:40}}>{title}</Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({})