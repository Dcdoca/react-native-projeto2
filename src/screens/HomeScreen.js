//HomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <ImageBackground source = {require('../components/img/imagem1.jpg')}
    style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Cine Pipoca</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MovieListScreen')}>
        <Text style={styles.stitle}>Ver Lista de Filmes</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    
    
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  stitle: {
    fontSize: 20,
    fontWeight: 'bold',
    
  }
});
