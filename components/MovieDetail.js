'use strict';

import React, { Component } from 'react';

import MovieImage from './MovieDetail/MovieImage';
import MovieOverview from './MovieDetail/MovieOverview';
import MovieTitle from './MovieDetail/MovieTitle';
import MovieInfo from './MovieDetail/MovieInfo';
import MovieDescription from './MovieDetail/MovieDescription';
import MovieRating from './MovieDetail/MovieRating';
import MovieDetailPage from './MovieDetail/MovieDetailPage';
import CastAndCrew from '../containers/CastAndCrewContainer';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movie;
        return (
            <MovieDetailPage movie={movie}>
                <MovieImage/>
                <MovieOverview>
                    <MovieTitle/>
                    <MovieInfo/>
                </MovieOverview>
                <MovieDescription/>
                <MovieRating/>
                <CastAndCrew/>
            </MovieDetailPage>
        );
    }
}

export default MovieDetail;
