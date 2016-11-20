'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';

import MovieImage from './movieDetail/MovieImage';
import MovieOverview from './movieDetail/MovieOverview';
import MovieTitle from './movieDetail/MovieTitle';
import MovieInfo from './movieDetail/MovieInfo';
import MovieDescription from './movieDetail/MovieDescription';
import MovieRating from './movieDetail/MovieRating';
import CastAndCrew from '../containers/CastAndCrewContainer';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movie;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <MovieImage movie={movie}/>
                <MovieOverview>
                    <MovieTitle movie={movie}/>
                    <MovieInfo movie={movie}/>
                </MovieOverview>
                <MovieDescription movie={movie}/>
                <MovieRating movie={movie}/>
                <CastAndCrew movie={movie}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        paddingBottom: 50
    }
});

module.exports = MovieDetail;
