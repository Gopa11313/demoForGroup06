import { Platform, StyleSheet, Text, View,StatusBar } from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MapScreen from "./MapScreen"
import ApiScreen from "./ApiScreen"
const Tab =createBottomTabNavigator()
export default function Dashboard({navigation,route}){
    return(
        <View style ={style.constianer}>
            <Tab.Navigator>
                <Tab.Screen name="Map" component ={MapScreen} options={{headerShown: false}} ></Tab.Screen>
                <Tab.Screen name="APi" component ={ApiScreen} options={{headerShown: false}} ></Tab.Screen>
            </Tab.Navigator>
        </View>
    )
};
const style = StyleSheet.create({
    constianer:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})