import React, { Component, useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';

export default function Register () {

  const [user, setUser] = useState([])
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  
  const handleSave = ( ) => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({
        name : name,
        email: email,
        password: password
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
  }


     
            return (
        <View style={styles.MainContainer}>
                <Text style= {styles.title}>User Registration Form</Text>
          
                <TextInput
                  placeholder='Enter User Name'
                  onChangeText={(TextInputText) => setName(TextInputText)}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Email'
                  onChangeText={() => setEmail()}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Password'
                  onChangeText={() => setPassword()}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  secureTextEntry={true}
                  />
                <Button title='Click Here To Register' onPress={handleSave} color='#2196F3' />
              
          
        </View>
                    
            );

    }


const styles = StyleSheet.create({

    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10
    },
    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
    },
    title:{
        fontSize: 22,
        color: '#2196F3',
        textAlign: 'center',
        marginBottom: 15
    }
}
    );