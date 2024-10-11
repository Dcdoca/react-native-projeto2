//MovieListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet , ImageBackground , Image } from 'react-native';

const movies = [
  { id: '1', title: 'Vingadores: Ultimato', description: 'Os Vingadores enfrentam Thanos.' ,
    image: require ('../components/img/vingadores.jpg')
  },
  { id: '2', title: 'A Origem', description: 'Sonhos dentro de sonhos.', 
    image: require ('../components/img/a-origem.jpg') },
  { id: '3', title: 'Matrix', description: 'A realidade não é o que parece.',
    image: require ('../components/img/matrix.jpg')
   },
];

export default function MovieListScreen({ navigation }) {
  return (
    <ImageBackground source = {require('../components/img/imagem2.jpg')}
    style={styles.background}>
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('MovieDetailScreen', { movie: item })}
          >
            <Image source={item.image} style={styles.movieImage} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  movieImage:{
    width: 50,
    height: 50,
    marginRight: 16,
    
  }
});
