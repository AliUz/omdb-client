import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import extractYear from '../../helpers/extractYear';

const MovieTitle = ({ movie }) => {
    const year = extractYear(movie.release_date);
    return (
        <View style={styles.rowContainer}>
            <Text style={styles.title}> {movie.title}</Text>
            <Text style={styles.year}> ({year}) </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        marginLeft: 10,
        fontSize: 15,
        height: 21,
        fontWeight: 'bold',
    },
    year: {
        width: 50,
        marginTop: 3,
        fontSize: 12,
        color: 'gray',
    },
});

export default MovieTitle;
