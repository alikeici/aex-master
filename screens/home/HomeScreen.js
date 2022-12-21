import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';


export default function HomeScreen() {



  const nav = useNavigation()

  return (
    <View>

      <TouchableOpacity style={styles.loginlink}>
        <Text onPress={() => nav.navigate('loginscreen')}>Logga in</Text>
        <Text onPress={() => nav.navigate('register')}>Registrering</Text>
        <Text onPress={() => nav.navigate('minasidor')}>Mina sidor</Text>
        <Text>Boka Tid</Text>

      </TouchableOpacity>
      <ImageBackground
        source={require('../home/cleaning.jpg')}
        style={styles.imagebackground}
      >

        <View style={styles.container}>

          <Text style={styles.homeHeader}>Städa fint Ab</Text>
          <Text style={styles.homebody}>Välkommen till oss.</Text>
          <Text style={styles.homebody1}>Här kan du som kund boka och avboka städningar, lämna feedback p genomförda städningar samt få en överblick över dina sidor</Text>


        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  homeHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00008b'
  },
  homebody: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
  },
  homebody1: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
  },
  loginlink: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#00008b',
    borderRadius: 5,
    paddingTop: 25,
    paddingBottom: 10,
    width: '100%',
  },
  imagebackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});
