import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import { NavigationContainer } from "@react-navigation/native";
import IMCScreen from "../screens/IMCScreen";

const Tab = createBottomTabNavigator();

//Instalar 
/*[7:37 a.m., 24/6/2025] abner:  npm install @react-navigation/native
[7:37 a.m., 24/6/2025] abner: npx expo install react-native-screens react-native-safe-area-context
[7:38 a.m., 24/6/2025] abner: https://reactnavigation.org/docs/getting-started
[7:39 a.m., 24/6/2025] abner: nAVEGACION npm install @react-navigation/bottom-tabs*/


function MyTab(){
    return(
        <Tab.Navigator >

            <Tab.Screen name="Welcome" 
            component={WelcomeScreen}
            options={{headerShown:false}}></Tab.Screen>

            <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
            <Tab.Screen name="Calculadora" component={CalculadoraScreen}></Tab.Screen>
            <Tab.Screen name="IMC" component={IMCScreen}></Tab.Screen>


        </Tab.Navigator>

    );
}

export default function NavegadorBotton(){

    return(
        <NavigationContainer>
            <MyTab>


            </MyTab>
        </NavigationContainer>
    )


};