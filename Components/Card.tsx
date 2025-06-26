import { Button, FlatList, Image, Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Card(props: any) {
    //console.log(props);



    const [visible, setvisible] = useState(false)

    const [datos, setdatos] = useState([])

    return (
        <View>
            <View style={styles.orientacion}>
                <TouchableOpacity onPress={() => setvisible(!visible)}>

                    <Text>{props.informacion.name}</Text>
                    <Image
                        source={{ uri: props.informacion.image }}
                        style={styles.img}
                    />


                </TouchableOpacity>
            </View>


            <Modal visible={visible} transparent>
                <View style={styles.modalOverlay}>
                    <View style={styles.modal1}>
                        <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
                        <Text style={{ marginTop: 10 }}>{props.informacion.description}</Text>
                        <Image
                            source={{ uri: props.informacion.image }}
                            style={styles.img2}
                            resizeMode="contain"
                        />
                        <FlatList
                            data={props}
                            renderItem={({ item }) =>
                                <View>
                                    <Text>Atributos</Text>
                                    <Text>{item.informacion.name} </Text>
                                </View>
                            }>


                        </FlatList>

                        <Button onPress={() => setvisible(false)} title="Cerrar" />
                    </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        objectFit: "contain",
    },
    img2: {
        width: 300,
        height: 300,
        objectFit: "contain",
        marginVertical: 20,
    },
    modal1: {
        padding: 20,
        width: "80%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    txtTitulo: {
        fontSize: 40,
        textAlign: "center"
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "#e3e3e336",
        justifyContent: "center",
        alignItems: "center",
    },

    orientacion: {
        flexDirection: 'column',
        justifyContent: "center",
        flex: 1,
        gap: 5
    }

});