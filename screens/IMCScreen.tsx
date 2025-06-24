import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function IMCScreen() {

    const [estatura, setEstatura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setIMC] = useState(0);


    //terniario  (condicion) ? si cumple : no cumple;

    function calcularIMC() {

        let calculo = peso / (estatura * estatura);

        setIMC(calculo);

        if (calculo < 18.5) {
            Alert.alert('Resultado', `Peso bajo ${calculo}`);
        } else if (calculo >= 18.5 && calculo <= 24.99) {
            Alert.alert('Resultado', `Peso normal ${calculo}`);
        } else if (calculo >= 25 && calculo <= 29.99) {
            Alert.alert('Resultado', `Sobrepeso ${calculo}`);
        } else {
            Alert.alert('Resultado', `Obesidad ${calculo}`);
        }




    }




    return (
        <View style={styles.container}>
            <Text >IMCScreen</Text>

            <Text>Ingrese su peso en kg</Text>
            <TextInput
                placeholder='peso'
                onChangeText={(texto) => setPeso(+texto)}
            />

            <Text>Ingrese su estatura en m</Text>
            <TextInput
                placeholder='estatura'
                onChangeText={(texto1) => setEstatura(+texto1)}
            />

            <Text>EL CALUÑLCULÑO FUE {imc}</Text>
            <Button title='Calcular IMC' onPress={calcularIMC} />


            {
                peso / (estatura * estatura) < 18.49
                    ?
                    <Text>Peso insuficiente</Text>
                    : peso / (estatura * estatura) <= 24.99 ?
                    <Text>Obesidad</Text>
                    : <Text>Juan</Text>
            }






        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ff5757",
        alignItems: 'center',
        justifyContent: 'center',
    }



})