'use strict';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Movie extends Component {
  render() {
      return (
        <View style={styles.movie} >
          <Image
            source={{uri: this.props.movie.poster.replace('http://', 'https://')}}
            style={styles.thumbnail}
          />
          <View >
            <Text
            style={styles.title}
            numberOfLines={3}>{this.props.movie.title}</Text>
            <Text style={styles.year}>{this.props.movie.year}</Text>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    movie: {
      height: 150,
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    title: {
      fontSize: 10,
      marginTop: 5,
      marginBottom: 2,
      width: 90,
      textAlign: 'center',
      justifyContent: 'flex-end'
    },
    year: {
      textAlign: 'center',
      fontSize: 10,
      fontWeight: 'bold'
    },
    thumbnail: {
      width: 53,
      height: 81,
      borderWidth: 0.5,
    }
});

module.exports = Movie;
