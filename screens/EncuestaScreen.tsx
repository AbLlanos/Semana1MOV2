import React, { use, useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';

const EncuestaScreen = () => {
    const [contacto, setContacto] = useState("");
    const [razon, setRazon] = useState("");
    const [gusto, setGutso] = useState(false);
    const [permitirContacto, setPermitirContacto] = useState(false);
    const [recomendacion, setRecomendacion] = useState("si");
    const [nota, setnota] = useState(0)

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
            `¿Recomendarías nuestra app? ${recomendacion} ¿Te gustó? ${gusto ? "Sí" : "No"}, Su nota final fue: ${nota}`
        );
    }

    useEffect(() => {

        if (nota<=1) {
            setnota(1)
        }

        if (nota>=10) {
            setnota(10)
        }


    }, [nota])
    



    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>3. Encuesta de Satisfacción Detallada</Text>

            <Text style={styles.title}>Ingrese sus datos</Text>


            <Text>Ingrese su numero de contacto</Text>
            <TextInput
                placeholder="Ingrese su contacto"
                style={styles.input}
                keyboardType='numeric'
                maxLength={10}
                onChangeText={setContacto}
                value={contacto}
            />

            <Text>¿Recomendarías el producto?</Text>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="si"
                    status={recomendacion === 'si' ? 'checked' : 'unchecked'}
                    onPress={() => setRecomendacion('si')}
                />
                <Text>Sí</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="no"
                    status={recomendacion === 'no' ? 'checked' : 'unchecked'}
                    onPress={() => setRecomendacion('no')}
                />
                <Text>No</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="talvez"
                    status={recomendacion === 'talvez' ? 'checked' : 'unchecked'}
                    onPress={() => setRecomendacion('talvez')}
                />
                <Text>Tal vez</Text>
            </View>

            <Text>Su valoración del 1 al 10 es</Text>
            <View style={styles.fila}>
                <Button title='Restar -1' onPress={() => setnota(nota - 1)} />
                <Text style={{fontSize:30}}> {nota} </Text>
                <Button title='Sumar +1' color={"#6111ac"} onPress={() => setnota(nota + 1)} />
            </View>

            <Text>Ingrese la razón de su valoración</Text>
            <TextInput
                placeholder="Ingrese la razón"
                style={styles.input}
                onChangeText={setRazon}
                value={razon}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    status={gusto ? 'checked' : 'unchecked'}
                    onPress={() => setGutso(!gusto)}
                />
                <Text>Me gustó</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Switch
                    value={permitirContacto}
                    onValueChange={setPermitirContacto}
                />
                <Text>Permitir contacto para seguimiento</Text>
            </View>









            <Button title="Terminar encuesta de satisfación" onPress={encuestaDatos} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ac75ff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 4,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 25,
        margin: 5,
        color: "#000d38",

    },
        fila: {
        flexDirection: "row",
        marginBottom:10,
    },
});


export default EncuestaScreen