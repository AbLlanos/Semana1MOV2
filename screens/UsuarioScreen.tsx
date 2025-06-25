import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const UsuarioScreen = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const [visible, setvisible] = useState(false)

    function confirmarDatos() {
        if (
            nombre.trim() === "" ||
            apellido.trim() === "" ||
            email.trim() === "" ||
            telefono.trim() === "" ||
            password.trim() === "" ||
            conPassword.trim() === ""
        ) {
            console.error("Hay datos en blanco");
            return;
        }

        if (password !== conPassword) {
            console.error("Las contraseñas no coinciden");
            return;
        }

        if (!visible) {
            console.error("Debe aceptar los términos y condiciones");
            return;
        }

        Alert.alert("Felicidads", "Se ha registrado con exito")
    }

    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Usuario Completo</Text>

            <Text style={styles.title}>Ingrese sus datos</Text>

            <TextInput
                placeholder="Ingrese su nombre"
                style={styles.input}
                
                onChangeText={(text) => setNombre(text)}
            />

            <TextInput
                placeholder="Ingrese su apellido"
                style={styles.input}
                onChangeText={(text) => setApellido(text)}
            />

            <TextInput
                placeholder="Ingrese su email"
                style={styles.input}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                placeholder="Ingrese su teléfono"
                style={styles.input}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(text) => setTelefono(text)}
            />

            <TextInput
                placeholder="Ingrese su contraseña"
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
            />

            <TextInput
                placeholder="Confirme la contraseña"
                style={styles.input}
                onChangeText={(text) => setConPassword(text)}
            />

            <View style={{ alignSelf: 'center' }}>
                <Text>Debe aceptar los terminos y condiciones</Text>

            </View>

            <View style={{ alignSelf: 'center' }}>
                <Switch
                    value={visible}
                    onValueChange={() => setvisible(!visible)}
                />

            </View>

            {
                visible == true ?
                    <View>
                        <Text style={{ fontSize: 20 , alignSelf: "center",marginBottom:5}} >Usted acpeto los terminos</Text>
                    </View>
                    :
                    <View>
                        <Text style={{ fontSize: 20 , alignSelf: "center",marginBottom:5}} >Debe aceptar los termino ocn el swith</Text>
                    </View>
            }


            <Button title="Confirmar" onPress={() => confirmarDatos()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f6920e',
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
        color: "#000d38",

    }
});

export default UsuarioScreen;
