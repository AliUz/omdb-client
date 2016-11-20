import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { BASE_IMAGE_URL } from '../../config.js';

const MovieImage = ({ movie }) => {
    const backdropImageURI = `${BASE_IMAGE_URL}${movie.backdrop_path}`;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: backdropImageURI}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 6.5,
        borderTopWidth: 4,
        borderColor: 'black',
        width: 500,
        marginBottom: 5
    },
    image: {
        width: 500,
        height: 300,
        alignSelf: 'center'
    },
});

export default MovieImage;
