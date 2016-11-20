import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import { BASE_IMAGE_URL } from '../../config.js';

const MovieDescription = ({ movie }) => {
    const posterImageURI = `${BASE_IMAGE_URL}${movie.poster_path}`;
    const overview = movie.overview;
    return (
        <View style={styles.rowContainer}>
            <Image style={styles.image} source={{uri: posterImageURI}} />
            <Text style={styles.description}>{overview}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 5
    },
    image: {
        width: 89,
        height: 132,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    description: {
        flex: 1,
        padding: 10,
        fontSize: 12,
    }
});

export default MovieDescription;
