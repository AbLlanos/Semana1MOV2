import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalculadoraScreen() {


    const [numero1, setnumero1] = useState(0);

    //Otro

    const [numero2, setnumero2] = useState(0);

    //total
        const [total, settotal] = useState(0);


    function sumar2() {

        return (setnumero2(numero2 + 1) )
    }


    //Son argumentos
    function menos() {

        return (setnumero1(numero1 - 1))
    }

    //All lamr no olvidar las lalves
    function Limpiar(){
        setnumero1(0)
        setnumero2(0)
    }


    ///*****************Use Efecct */

    //El final es lo que detecta al cmabiar de estado

    useEffect(() => {

        if (numero1<=-5 ) {
            setnumero1(-5)

        }

        if (numero1>=5) {
            setnumero1(5)
        } 

        if (numero2<=-4) {
            setnumero2(-4)
            
        }

        if (numero2>=4){
            setnumero2(4)
        }

        
    }, [numero1,numero2])
    



    //Enviar alertae en la funciton
    function resultado(){
        let suma = (numero1+numero2)
        Alert.alert('Resultado', `El total es ${suma}`,[
            {
                text:"Borrar",
                onPress: ()=> setnumero1(0)
            },
            {
                text:"Limpiar",
                onPress: ()=> Limpiar()
            }

        ])
        return (settotal(suma));
        
    }



    return (
        <View>
            <Text style={{ fontSize: 50 }}>CalculadoraScreen</Text>

            <View style={styles.fila}>

                <Button title=''></Button>
                <Text>{numero1}</Text>


                <Button title='---------' onPress={menos} />


                <Button title='+numero1' onPress={() => setnumero1(numero1 + 1)} />


                    <Text>im</Text>

            </View>

            <View style={styles.fila}>

                <Button title=''></Button>
                <Text>{numero2}</Text>
                <Button title='--numero2' onPress={() => setnumero2(numero2 - 1)} />


                <Button title='+numero2' onPress={() => setnumero2(numero2 + 1)} />
            </View>

            <View style={styles.fila}>
                <Text>{total}</Text>
                <Button title='Calcular' onPress={resultado}></Button>
         


            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    fila: {
        flexDirection: "column",
        padding:40,
        backgroundColor: "#fac400",
        alignItems:"center",
        
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },

    linea:{
        backgroundColor: "black",
        margin:1,
        width:30,

    }


})