import { Button, FlatList, Image, Modal, StyleSheet, Switch, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function CardPelicula3(props: any) {

  const [visibleMo, setvisibleMo] = useState(false)

  const [visibleNotas, setnotas] = useState(false)


  return (
    <View style={styles.container}>

      <View style={styles.orientacion}></View>

      <View>

        <TouchableOpacity onPress={() => setvisibleMo(!visibleMo)}>

          <View style={styles.contenedorGeneral}>
            <View style={styles.orientacion}>
              <Text>{props.informacion.titulo}</Text>
              <Text>{props.informacion.genero.join(', ')}</Text>
              <Text>{props.informacion.descripcion}</Text>
            </View>
            <Image
              source={{ uri: props.informacion.imagen }}
              style={styles.img}
            />
          </View>


        </TouchableOpacity>


        <Modal visible={visibleMo} transparent>
          <View style={styles.modalOverlay}>
            <View style={styles.modal1}>
              <Text style={styles.txtTitulo}>{props.informacion.titulo}</Text>
              <Text>{props.informacion.genero}</Text>
              <Text>{props.informacion.director}</Text>
              <Image
                source={{ uri: props.informacion.imagen }}
                style={styles.imgMo}
                resizeMode="contain"
              />

              <Switch
                value={visibleNotas}
                onValueChange={setnotas}
              />

              {
                visibleNotas == true ?
                  <View>

                    <FlatList

                      data={props.informacion.opiniones.opiniones_positivas.detalles}
                      renderItem={({ item }) => (
                        <View style={{ marginBottom: 10 }}>
                          <Text>{item.opinion}</Text>
                          <Text>Usuario: {item.detalles_usuario.usuario}</Text>
                          <Text>Fecha: {item.detalles_usuario.fecha}</Text>
                          <Text>Puntuación: {item.detalles_usuario.puntuacion}</Text>
                        </View>
                      )}
                    />


                    <FlatList

                      data={props.informacion.opiniones.opiniones_negativas.detalles}
                      renderItem={({ item }) => (
                        <View style={{ marginBottom: 10 }}>
                          <Text>{item.opinion}</Text>
                          <Text>Usuario: {item.detalles_usuario.usuario}</Text>
                          <Text>Fecha: {item.detalles_usuario.fecha}</Text>
                          <Text>Puntuación: {item.detalles_usuario.puntuacion}</Text>
                        </View>
                      )}
                    />



                  </View>
                  :
                  <View>
                    <Text>Active la opcion para ver las reseñas</Text>
                  </View>
              }

              <View style={{ paddingTop: 20 }}>
                <Button onPress={() => setvisibleMo(false)} title="Regresar" />
              </View>

            </View>
          </View>
        </Modal>
      </View>




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0"
  },

  img: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
  imgMo: {
    width: 200,
    height: 200,
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
    fontSize: 50,
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

    margin: 10,
    flex: 1,
    gap: 5
  },

  contenedorGeneral: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9ecdff",
    margin: 10,
    gap: 10
  },

})