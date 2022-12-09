import 'react-native-gesture-handler';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';

export default function App() {

  const Stack = createStackNavigator();
  //const Drawer = createDrawerNavigator();

  return (




    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown : false}} name='homescreen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='loginscreen' component={LoginScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

