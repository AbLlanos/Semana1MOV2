import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function IMCScreen() {
    const [estatura, setEstatura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setIMC] = useState(0);

    function calcularIMC() {

        if (estatura <= 0 || peso <= 0) {
            Alert.alert('Error', 'Ingrese valor para los 2 campos');
            return;
        }

        let calculo = peso / (estatura * estatura);
        let resultado = '';

        if (calculo < 18.5) {
            resultado = 'Peso bajo';
        } else if (calculo >= 18.5 && calculo <= 24.99) {
            resultado = 'Peso normal';
        } else if (calculo >= 25 && calculo <= 29.99) {
            resultado = 'Sobrepeso';
        } else {
            resultado = 'Obesidad';
        }

        setIMC(calculo);
        Alert.alert('Resultado', `${resultado}: ${calculo}`);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>IMCScreen</Text>

            <Text style={styles.txt}>Ingrese su peso en kg</Text>
            <TextInput
                placeholder='Ingrese su peso'
                keyboardType='numeric'
                style={styles.inputForm}
                onChangeText={(texto) => setPeso(parseFloat(texto))}
            />

            <Text style={styles.txt}>Ingrese su estatura en m</Text>
            <TextInput
                placeholder='Ingrese su estatura'
                keyboardType='numeric'
                style={styles.inputForm}
                onChangeText={(texto1) => setEstatura(parseFloat(texto1))}
            />

            <Text style={(styles.btnFinal,{paddingBottom:10})} >El cálculo del IMC es: {imc}</Text>
            <Button

                title='Calcular IMC' onPress={calcularIMC} />

            <Text style={styles.btnFinal} ></Text>

            {
                peso / (estatura * estatura) < 18.49
                    ?
                    <Text>Peso insuficiente</Text>
                    :
                    <Text>Obesidad</Text>
            }






        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#d4d4d4",
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputForm: {
        backgroundColor: "#f5bb8f",
        borderRadius: 10,
        width: "50%",
        textAlign: "center",
    },
    txt: {
        fontSize: 15,
        marginVertical: 10,
    },
    btnFinal: {
    padding:1,
    }



})