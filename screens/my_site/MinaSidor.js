import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MinaSidorContainer from "./MinaSidorContainer";

const data = [{
    name: "Edin H",
    email: "edin@java.com"
},
{
    name: "Gustav HF",
    email: "gustav@java.com"
},
{
    name: "Ali K",
    email: "ali@java.com"
},
{
    name: "Xherald H",
    email: "xherald@java.com"
}
]

const MinaSidor = () => {

    return (
        <View>
            <Text style={styles.minasidorheader}>Mina Sidor</Text>
            {data.map(item=>(
                <MinaSidorContainer name={item.name} email={item.email}/>
            ))}
        </View>
    )
}

export default MinaSidor;
const styles = StyleSheet.create({
    container: {
        borderWidth : 2,
        borderColor: 'black',
        margin: 5,
        padding: 5,
    },
    containerText:{

    },
    minasidorheader: {
        flex: 1,
        fontSize: 30,
        alignItems: 'center'
    }
})