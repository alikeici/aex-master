import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MinaSidorContainer = ({name="", email=""}) => {

    return (
        
         
        
            <View>
            
            <View style={styles.container}>

                <Text style={styles.containerText}>Namn: {name}</Text>
                <Text style={styles.containerText}>Email: {email}</Text>
            </View>
            </View>
    )

}

export default MinaSidorContainer

const styles = StyleSheet.create({
    container: {
        borderWidth : 2,
        borderColor: 'black',
        margin: 5,
        padding: 5,
        borderRadius: 5,
    },
    containerText:{
        fontSize: 20
    },

})