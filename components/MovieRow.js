'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';
import { BASE_IMAGE_URL } from '../config.js';

class MovieRow extends Component {
  constructor(props) {
      super(props);
      this.state = {
          movie: null
      };
  }

  render() {
      const { movie, handleOnPress } = this.props;
      return (
          <TouchableHighlight onPress={() => handleOnPress(movie)}  underlayColor="#dddddd">
              <View>
                  <View style={styles.container}>
                      <Image
                          source={{uri: `${BASE_IMAGE_URL}${movie.poster_path}`}}
                          style={styles.thumbnail} />
                          <View style={styles.rightContainer}>
                              <Text style={styles.title}>{movie.title}</Text>
                              <Text style={styles.releaseDate}>{movie.release_date}</Text>
                          </View>
                      </View>
                      <View style={styles.separator} />
                  </View>
         </TouchableHighlight>
     );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    releaseDate: {
        color: '#656565'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
});

export default MovieRow;
