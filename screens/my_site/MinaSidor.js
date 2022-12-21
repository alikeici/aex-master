import React from "react";
import { View } from "react-native";
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
            {data.map(item=>(
                <MinaSidorContainer name={item.name} email={item.email}/>
            ))}
        </View>
    )
}

export default MinaSidor;