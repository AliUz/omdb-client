'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView
} from 'react-native';

import MovieImage from './movieDetail/MovieImage';
import MovieOverview from './movieDetail/MovieOverview';
import CastAndCrew from '../containers/CastAndCrewContainer';
import getGenres from '../helpers/getGenres';

import { BASE_IMAGE_URL } from '../config.js';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movie;
        const genres = movie.genres;
        const genreNames = getGenres(genres);
        const posterImageURI = `${BASE_IMAGE_URL}${movie.poster_path}`;
        const overview = movie.overview;
        const year = movie.release_date.split('-')[0];
        const pgRating = movie.Rated;
        const runtime = movie.Runtime;
        const averageVote = movie.imdbRating;
        const numVotes = movie.imdbVotes;
        const metaScore = movie.Metascore;

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <MovieImage movie={movie}/>
                {/* <MovieOverview>
                    <MovieTitle movie={movie}/>
                    <MovieInfo movie={movie}/>
                </MovieOverview> */}
                <View style={styles.infoContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.title}> {movie.title}</Text>
                        <Text style={styles.year}> ({year}) </Text>
                    </View>
                    <View style={styles.genreContainer}>
                        <Text style={styles.pgRating}> {pgRating} | </Text>
                        <Text style={styles.runtime}> {runtime} | </Text>
                        <Text style={styles.genres}> {genreNames} </Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Image style={styles.descriptionImage} source={{uri: posterImageURI}} />
                    <Text style={styles.description}>{overview}</Text>
                </View>
                <View style={styles.voteContainer}>
                    <View style={styles.voteRowContainer}>
                        <Image style={styles.rating} source={require('../assets/rating-black.png')} />
                        <Text style={styles.vote}>{averageVote}</Text>
                        <Text style={styles.outOfTen}> / 10 </Text>
                        <Text style={styles.metaScore}>{metaScore}</Text>
                        <Text style={styles.metaScoreText}> Metascore</Text>
                    </View>
                    <Text style={styles.numVotes}>{numVotes}</Text>
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
    voteContainer: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 5
    },
    voteRowContainer: {
        flexDirection: 'row',
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
    vote: {
        marginLeft: 10,
        fontSize: 13,
        fontWeight: '600',
        alignSelf: 'center'
    },
    outOfTen: {
        fontSize: 11,
        alignSelf: 'center',
        color: '#6b6b6b'
    },
    numVotes: {
        width: 45,
        marginLeft: 55,
        color: '#6b6b6b',
        fontSize: 12,
        bottom: 15
    },
    rating: {
        width: 35,
        height: 35,
        marginLeft: 10,
        top: 5
    },
    metaScore: {
        height: 20,
        marginLeft: 100,
        marginTop: 15,
        alignSelf: 'center',
        backgroundColor: '#ccc',
        paddingTop: 2,
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 2,
        textAlign: 'center',
        color: 'white'
    },
    metaScoreText: {
        marginLeft: 5,
        marginTop: 15,
        alignSelf: 'center'
    }
});

module.exports = MovieDetail;
