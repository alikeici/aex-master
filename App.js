import 'react-native-gesture-handler';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import Register from './screens/register/Register';
import MinaSidor from './screens/my_site/MInaSidor';

export default function App() {

  const Stack = createStackNavigator();
  

  return (




    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown : false}} name='homescreen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='loginscreen' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='register' component={Register}></Stack.Screen>
        <Stack.Screen name='minasidor' component={MinaSidor}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

