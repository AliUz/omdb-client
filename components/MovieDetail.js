'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView
} from 'react-native';
import CastAndCrew from './CastAndCrew';
import { BASE_IMAGE_URL } from '../config.js';
import getGenres from '../helpers/getGenres';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movie;
        const genres = movie.genres;
        const genreNames = getGenres(genres);
        const backdropImageURI = `${BASE_IMAGE_URL}${movie.backdrop_path}`;
        const posterImageURI = `${BASE_IMAGE_URL}${movie.poster_path}`;
        const overview = movie.overview;
        const year = movie.release_date.split('-')[0];
        console.log(movie.id);
        const pgRating = movie.adult ? 'R' : 'PG-13';
        const runtime = movie.runtime;

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: backdropImageURI}} />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.title}> {movie.title}</Text>
                        <Text style={styles.year}> ({year}) </Text>
                    </View>
                    <View style={styles.genreContainer}>
                        <Text style={styles.pgRating}> {pgRating} | </Text>
                        <Text style={styles.runtime}> {runtime} min | </Text>
                        <Text style={styles.genres}> {genreNames} </Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Image style={styles.descriptionImage} source={{uri: posterImageURI}} />
                    <Text style={styles.description}>{overview}</Text>
                </View>
                <CastAndCrew movie={movie}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        paddingBottom: 50
    },
    imageContainer: {
        borderBottomWidth: 6.5,
        borderTopWidth: 4,
        borderColor: 'black',
        width: 500,
        marginBottom: 5
    },
    infoContainer: {
        backgroundColor: '#f5f5f5',
        borderTopWidth: 0.5,
        borderBottomWidth: 1,
        borderTopColor: 'white',
        borderBottomColor: '#ddd',
    },
    headingContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    descriptionContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 5
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
    pgRating: {
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
    },
    image: {
        width: 500,
        height: 300,
        alignSelf: 'center'
    },
    description: {
        flex: 1,
        padding: 10,
        fontSize: 12,
    },
    descriptionImage: {
        width: 89,
        height: 132,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
});

module.exports = MovieDetail;
