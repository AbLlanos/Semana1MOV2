import React, { use, useState } from 'react'
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';

const EncuestaScreen = () => {
    const [contacto, setContacto] = useState("");
    const [razon, setRazon] = useState("");
    const [recomendacion, setConfirmacion] = useState('si');
    const [gusto, setGutso] = React.useState('first');
    const [permitirContacto, setPermitirContacto] = useState(false);

    function encuestaDatos() {

        if (contacto.trim() == "" || razon.trim() == ""
        ) {
            console.error("Hay espacios vacios")
            return;
        }


        if (!permitirContacto) {
            Alert.alert("Error", "Debes permitir el contacto para continuar.");
            return;
        }

        Alert.alert(
            'Resultados',
            `¿Recomendarías nuestra app? ${recomendacion} ¿Qué te gustó? , Acepto perimititr contacto ${permitirContacto ? "Sí" : "No"}`
        );
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>3. Encuesta de Satisfacción Detallada</Text>

            <Text style={styles.title}>Ingrese sus datos</Text>


            <Text>Ingrese su contacto</Text>
            <TextInput
                placeholder="Ingrese su contacto"
                style={styles.input}
                onChangeText={setContacto}
                value={contacto}
            />

            <Text>¿Recomendarías el producto?</Text>

            <RadioButton.Group
                onValueChange={value => setConfirmacion(value)}
                value={recomendacion}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value="si" />
                    <Text>Sí</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value="no" />
                    <Text>No</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value="quizas" />
                    <Text>Quizás</Text>
                </View>
            </RadioButton.Group>

            <View>
                <RadioButton
                    value="first"
                    status={gusto === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setGutso('first')}
                />
                <RadioButton
                    value="second"
                    status={gusto  === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setGutso('second')}
                />
            </View>


            <Text>Ingrese la razón de su valoración</Text>
            <TextInput
                placeholder="Ingrese la razón"
                style={styles.input}
                onChangeText={setRazon}
                value={razon}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Switch
                    value={permitirContacto}
                    onValueChange={setPermitirContacto}
                />
                <Text>Permitir contacto para seguimiento</Text>
            </View>



            <Button title="Confirmar" onPress={encuestaDatos} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c694ff',
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


export default EncuestaScreen