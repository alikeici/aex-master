import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';

export default class Register extends Component {


        render() {
            return (
        <View style={styles.MainContainer}>
                <Text style= {styles.title}>User Registration Form</Text>
          
                <TextInput
                  placeholder='Enter User Name'
                 // onChangeText={(TextInputText) => this.setState({name : TextInputText})}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Email'
                //  onChangeText={(TextInputText) => this.setState({email : TextInputText})}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Password'
                //  onChangeText={(TextInputText) => this.setState({password : TextInputText})}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  secureTextEntry={true}
                  />
                <Button title='Click Here To Register' onPress={this.UserRegistrationFunction} color='#2196F3' />
              
          
        </View>
                    
            );

    }
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