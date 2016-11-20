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
import MovieTitle from './movieDetail/MovieTitle';
import MovieInfo from './movieDetail/MovieInfo';
import CastAndCrew from '../containers/CastAndCrewContainer';

import { BASE_IMAGE_URL } from '../config.js';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movie;
        const posterImageURI = `${BASE_IMAGE_URL}${movie.poster_path}`;
        const overview = movie.overview;
        const averageVote = movie.imdbRating;
        const numVotes = movie.imdbVotes;
        const metaScore = movie.Metascore;

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <MovieImage movie={movie}/>
                <MovieOverview>
                    <MovieTitle movie={movie}/>
                    <MovieInfo movie={movie}/>
                </MovieOverview>
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
