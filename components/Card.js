import React, {PureComponent, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

const placeholder = require('../assets/images/placeholder.png');

export default class Card extends PureComponent {
  render() {
    const {item, navigation} = this.props;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            movieId: item.id,
          })
        }
        style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}
              : placeholder
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
    marginBottom: 8,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    top: 10,
    textAlign: 'center',
  },
});
