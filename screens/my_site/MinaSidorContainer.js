import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MinaSidorContainer = ({name="", email=""}) => {

    return (
            <View styles={styles.container}>
                <Text styles={styles.containerText}>Namn: {name}</Text>
                <Text styles={styles.containerText}>Email: {email}</Text>
            </View>
    )

}

export default MinaSidorContainer

const styles = StyleSheet.create({
    container: {
        borderWidth : 1,
        borderColor: 'black'
    },
    containerText:{

    }
})