'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import { BASE_IMAGE_URL } from '../config.js';

class MovieDetail extends Component {
    render() {
        const movie = this.props.movie;
        console.log(`${BASE_IMAGE_URL}${movie.backdrop_path}`);
        const imageURI = `${BASE_IMAGE_URL}${movie.backdrop_path}`;
        const overview = movie.overview;
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: imageURI}} />
                <Text style={styles.description}>{overview}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        alignItems: 'center'
    },
    image: {
        width: 500,
        height: 300,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});

module.exports = MovieDetail;
