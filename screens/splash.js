import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default  function splash ( {navigation,route}){
    useEffect(()=>{
        navigation.navigate("DashBoard")
    },3000)
return(
    <View style ={styles.container}>
    <Image source={require("../assets/logo.jpg")} style={{height:200,width:200}}/>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})