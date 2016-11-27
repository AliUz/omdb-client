'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import assign from 'lodash/assign';
import { API_KEY } from '../config.js';
import MovieDetail from '../components/MovieDetail';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            isLoading: true
        };
    }

    componentDidMount() {
        const id = this.props.movie.id;
        this.fetchMovie(id);
    }

    fetchMovie = (id) => {
        const REQUEST_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,genres&include_image_language=en,null`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then((responseData) => {
                const OMDB_URL = `https://omdbapi.com/?i=${responseData.imdb_id}&plot=full&r=json`;
                return fetch(OMDB_URL)
                    .then(response => response.json())
                    .then(omdbData => {
                        assign(responseData, omdbData);
                        this.setState({
                            movie: responseData,
                            isLoading: false
                        });
                    });
            })
            .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator
                    size="large"/>
                <Text>
                    Loading Movies...
                </Text>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return this.renderLoadingView();
        }
        return <MovieDetail movie={this.state.movie} />;
    }
}

const styles = StyleSheet.create({
    loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
});

module.exports = MovieDetailContainer;
