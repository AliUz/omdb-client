import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import getGenres from '../../helpers/getGenres';

const MovieInfo = ({ movie }) => {
    const genres = getGenres(movie.genres);
    const rating = movie.Rated;
    const runtime = movie.Runtime;
    return (
        <View style={styles.rowContainer}>
            <Text style={styles.rating}> {rating} | </Text>
            <Text style={styles.runtime}> {runtime} | </Text>
            <Text style={styles.genres}> {genres} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    rating: {
        marginLeft: 12,
        marginTop: 6,
        fontSize: 8,
    },
    runtime: {
        marginTop: 6,
        fontSize: 8,
    },
    genres: {
        marginTop: 5,
        fontSize: 9,
        fontWeight: '500',
        color: '#6b6b6b'
    }
});

export default MovieInfo;
