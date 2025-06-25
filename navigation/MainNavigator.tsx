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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Formulario">

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
                options={{ tabBarIcon: () => <Image style={{width:50, height:50}} source={require("../assets/images/01.png")} /> }}></Tab.Screen>

        </Tab.Navigator>

    )
}

export default function NavegadorPrincipal() {

    return (
        <NavigationContainer>
            <MyStack />

        </NavigationContainer>


    )

}