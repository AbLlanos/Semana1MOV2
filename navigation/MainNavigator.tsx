import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import IMCScreen from "../screens/IMCScreen";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from "react-native";
import FormularioScreen from "../screens/FormularioScreen";
import UsuarioScreen from "../screens/UsuarioScreen";
import DirreccionScreen from "../screens/DirreccionScreen";
import EncuestaScreen from "../screens/EncuestaScreen";
import ListaLocalScreen from "../screens/listas/ListaLocalScreen";
import ListaExternaScreen from "../screens/listas/ListaExternaScreen";
import ListaPeliculas3Screen from "../screens/listas/ListaPeliculas3Screen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Welcome">

            <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>

            <Stack.Screen name="Tabs" component={MyTab}></Stack.Screen>

            <Stack.Screen name="Formulario" component={FormularioScreen}></Stack.Screen>


        </Stack.Navigator>
    );
}

function MyTab() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen name="Calculadora"
                component={CalculadoraScreen}
                options={{ tabBarIcon: () => <FontAwesome name="calculator" size={24} color="black" /> }}></Tab.Screen>
            <Tab.Screen name="IMC"
                component={IMCScreen}
                options={{ tabBarIcon: () => <AntDesign name="arrowup" size={24} color="black" /> }}></Tab.Screen>

            <Tab.Screen name="Login"
                component={LoginScreen}
                options={{ tabBarIcon: () => <Image style={{ width: 50, height: 50 }} source={require("../assets/images/01.png")} /> }}></Tab.Screen>

            <Tab.Screen name="Usuario"
                component={UsuarioScreen}
            ></Tab.Screen>

            <Tab.Screen name="Direcion"
                component={DirreccionScreen}
            ></Tab.Screen>

            <Tab.Screen name="Encuesta"
                component={EncuestaScreen}
            ></Tab.Screen>
            

                        <Tab.Screen name="Top"
                component={MyTop}>
            </Tab.Screen>






        </Tab.Navigator>

    )
}



const Top = createBottomTabNavigator()

function MyTop() {
    return (
        < Top.Navigator >
            <Top.Screen name="Local" component={ListaLocalScreen} />
            <Top.Screen name="Externo" component={ListaExternaScreen} />
            <Top.Screen name="Peliculas" component={ListaPeliculas3Screen} />

        </Top.Navigator >


    )


}

export default function NavegadorPrincipal() {

    return (
        <NavigationContainer>
            <MyStack />

        </NavigationContainer>


    )

}