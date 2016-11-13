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
import { API_KEY, BASE_IMAGE_URL } from '../config.js';
import getGenres from '../helpers/getGenres';

const REQUEST_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        };
    }

    componentDidMount() {
        this.fetchGenres();
    }

    fetchGenres = () => {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    genres: responseData.genres
                });
            })
            .done();
    }

    render() {
        const movie = this.props.movie;
        const genres = this.state.genres;
        const genreNames = getGenres(movie.genre_ids, genres);
        const backdropImageURI = `${BASE_IMAGE_URL}${movie.backdrop_path}`;
        const posterImageURI = `${BASE_IMAGE_URL}${movie.poster_path}`;
        const overview = movie.overview;
        const year = movie.release_date.split('-')[0];
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
                        <Text style={styles.genres}> {genreNames} </Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Image style={styles.descriptionImage} source={{uri: posterImageURI}} />
                    <Text style={styles.description}>{overview}</Text>
                </View>
                <CastAndCrew movie={movie}></CastAndCrew>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

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
        flexWrap: 'wrap'
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
    genres: {
        marginLeft: 12,
        marginTop: 5,
        fontSize: 10,
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
