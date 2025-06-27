import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';

function DirreccionScreen() {


    const [calle, setCalle] = useState("");
    const [numero, setNumero] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [referencia, setReferencia] = useState("");

    const [visible, setvisible] = useState(false)


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


        Alert.alert("Los datos son correctos", "Su dirrecion es valida")
    }





    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>2. Formulario de Dirección con Validación</Text>

            <Text style={styles.title}>Ingrese sus datos</Text>

            <Text style={styles.txt}>Ingrese la calle en la que vive</Text>
            <TextInput
                placeholder="Ingrese su calle "
                style={styles.input}
                onChangeText={(text) => setCalle(text)}
            />

            <Text style={styles.txt}>Ingrese sus numero exterior</Text>
            <TextInput
                placeholder="Ingrese su numero exterior"
                style={styles.input}
                keyboardType='numeric'
                maxLength={10}
                onChangeText={(text) => setNumero(text)}
            />

            <Text style={styles.txt}>Ingrese el nombre de su ciudad</Text>
            <TextInput
                placeholder="Ingrese su ciudad"
                style={styles.input}
                onChangeText={(text) => setCiudad(text)}
            />

            <Text style={styles.txt}>Ingrese uan referencia  (opcional)</Text>
            <TextInput
                placeholder="Ingrese su referencia (opcional)"
                style={styles.input}
                onChangeText={(text) => setReferencia(text)}
            />



            <Text style={{ fontSize: 15, alignSelf: "center", marginBottom: 5 }} >¿La dirrecion es fiscal?</Text>
            <View style={{ alignSelf: 'center' }}>
                <Switch
                    value={visible}
                    onValueChange={() => setvisible(!visible)}
                />
            </View>

            {
                visible == true ?
                    <View>
                        <Text style={{ fontSize: 15, alignSelf: "center", marginBottom: 5 }} >La dirrecion es fiscal</Text>
                    </View>
                    :
                    <View>
                        <Text style={{ fontSize: 15, alignSelf: "center", marginBottom: 5 }} >La dirrecion no es fiscal</Text>
                    </View>
            }



            <Button title="Validar dirreción" onPress={() => confirmarDatos()} />
                
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#94fffb',
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
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 25,
        color: "#000d38",
        marginBottom:10,

    },
    txt:{
        fontSize:15,
    }
});


export default DirreccionScreen;