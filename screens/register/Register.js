import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';


export default function Register ( ) {

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
console.log(fname)
  }, [fname])


  const handleSendRegister = async () => {

    var regObj = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      role: "customer"
    }

    var test = await fetch('http://10.0.2.2:1337/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        role: "customer",
      }),
    });

  }
      
            return (
        <View style={styles.MainContainer}>
                <Text style= {styles.title}>User Registration Form</Text>
          
                <TextInput
                  placeholder='Enter User fName'
                 onChangeText={(e) => setFname(e)}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                  <TextInput
                  placeholder='Enter User lName'
                 onChangeText={(e) => setLname(e)}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Email'
                onChangeText={(e) => setEmail(e)}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Password'
                onChangeText={(e) => setPassword(e)}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  secureTextEntry={true}
                  />
                <Button title='Click Here To Register' onPress={() => handleSendRegister()} color='#2196F3' />
              
          
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

