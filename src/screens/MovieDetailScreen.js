//MovieDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet , ImageBackground } from 'react-native';

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <ImageBackground source = {require('../components/img/imagem3.jpg')}
    style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
