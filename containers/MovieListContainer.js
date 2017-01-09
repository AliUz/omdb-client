'use strict';

import React, { Component } from 'react';
import {
    ListView
} from 'react-native';

import MovieList from '../components/MovieList';
import { fetchMovieWithRatings } from '../services/requests';
import { API_KEY } from '../config.js';

class MovieListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            movies: []
        };
    }

    componentDidMount() {
        this.fetchNowPlaying();
    }

    fetchNowPlaying = () => {
        const REQUEST_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then((responseData) => {
                const movies = responseData.results;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(movies)
                });
                return movies;
            })
            .then((moviesNoRatings) => {
                const fetchMovieJob = moviesNoRatings.map(movie => fetchMovieWithRatings(movie.id));
                return Promise.all(fetchMovieJob)
                    .then((movies) => {
                        this.setState({
                            movies,
                            isLoading: false
                        });
                    });
            })
            .done();
    }

    render() {
        const { dataSource, isLoading, movies } = this.state;
        const { ...other } = this.props;
        return <MovieList
                dataSource={dataSource}
                isLoading={isLoading}
                movies={movies}
                {...other}
            />;
    }
}

export default MovieListContainer;
