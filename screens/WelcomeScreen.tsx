import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}:any) {
  return (
    <View>
      <Text>WelcomeScreen</Text>

        <Button title='Ir al login' onPress={()=> navigation.navigate("Login")} ></Button>

        <Text>Abner Salazar Llanos</Text>

    
    </View>
  )
}

const styles = StyleSheet.create({})