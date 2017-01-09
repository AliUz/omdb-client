'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import assign from 'lodash/assign';
import MovieDetail from '../components/MovieDetail';
import * as requests from '../services';

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
        this.fetchMovieDetails(id);
    }

    fetchMovieDetails = (id) => {
      return requests.fetchMovie(id)
        .then(movie => {
          this.setState({
              movie
          });
          return requests.fetchMovieRatings(movie.imdb_id)
            .then(ratings => {
              assign(movie, ratings);
              this.setState({
                  movie,
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

export default MovieDetailContainer;
