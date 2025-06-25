import { ActivityIndicator, Button, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'

const FormularioScreen = () => {


    const [usuario, setusuario] = useState("")
    const [edad, setedad] = useState(0)


    const [visible, setvisible] = useState(false)

    //Guarda en JSON con items
    const [datos, setdatos] = useState({ "usuario": "", "edad": 0 })

    function guardar() {

        if (usuario.trim() == "" || usuario == null) {
            console.error("datos en blanco")

        } else {

            setdatos({
                "usuario": usuario,
                "edad": edad
            });
        }

    }

    //        <View style={(styles.container, { backgroundColor: "red" })}>


    return (
        <View style={(styles.container)}>
            <Text style={{ fontSize: 60 }}>FormularioScreen</Text>


            <TextInput style={styles.input}
                placeholder='Ingresar usuario'
                onChangeText={(texto) => setusuario(texto)}></TextInput>


            <TextInput style={styles.input}
                placeholder='Ingresar edad'
                onChangeText={(texto) => setedad(parseInt(texto))}></TextInput>

            <Button title="Guardar" onPress={() => guardar()}></Button>


            <View style={styles.linea} />

            <Switch
                style={styles.sw}
                value={visible}
                onValueChange={() => setvisible(!visible)}
                trackColor={{ false: "#004266", true: "#81b0ff" }}
                thumbColor={visible ? "" : "#f4f3f4"}
            />


            <Divider ></Divider>
            <Divider></Divider>



            <View style={styles.linea} />

            {
                visible == true ?
                    <View>
                        <Text style={{ fontSize: 40 }} >{datos.usuario}</Text>
                        <Text style={{ fontSize: 40 }} >{datos.edad}</Text>

                    </View>
                    :
                    <View>
                        <Text style={{ fontSize: 60, alignSelf: "center" }}>No visiblew</Text>
                        <ActivityIndicator size={100}></ActivityIndicator>
                    </View>
            }






        </View>
    )
}

export default FormularioScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fdff99',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: "90%",
        marginBottom: 30,
        color: "red",
        fontSize: 40,
        backgroundColor: "#f98634",
    },

    linea: {

        borderWidth: 1,
        width: "90%",
        margin: 20

    },

    txt: {
        fontSize: 30,
    },

    sw: {
        transform: [{ scaleX: 3 }, { scaleY: 3 }],
        marginVertical: 10,
    },


})