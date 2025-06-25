import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function DirreccionScreen() {


    const [calle, setCalle] = useState("");
    const [numero, setNumero] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [referencia, setReferencia] = useState("");

    function confirmarDatos() {
        if (calle.trim() === "") {
            console.error("La calle es obligatoria");
            return;
        }

        if (numero.trim() === "") {
            console.error("El número es obligatorio");
            return;
        }

        if (ciudad.trim() === "") {
            console.error("La ciudad es obligatoria");
            return;
        }


        Alert.alert("Felicidads", "Su dirrecion es valida")
    }





    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>2. Formulario de Dirección con Validación</Text>

            <Text style={styles.title}>Ingrese sus datos</Text>

            <TextInput
                placeholder="Ingrese su calle "
                style={styles.input}
                onChangeText={(text) => setCalle(text)}
            />

            <TextInput
                placeholder="Ingrese su numero"
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(text) => setNumero(text)}
            />

            <TextInput
                placeholder="Ingrese su ciudad"
                style={styles.input}
                onChangeText={(text) => setCiudad(text)}
            />

            <TextInput
                placeholder="Ingrese su referencia (opciaonl)"
                style={styles.input}
                onChangeText={(text) => setReferencia(text)}
            />

            <Button title="Confirmar" onPress={() => confirmarDatos()} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0074c7',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 8,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 40,
        margin: 10,
        color: "#1f0004",

    }
});


export default DirreccionScreen;