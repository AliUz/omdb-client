'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ListView,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';
import { find } from 'lodash';
import MovieDetail from '../components/MovieDetail';
import { BASE_IMAGE_URL } from '../config.js';

class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    showMovieDetail = (movie) => {
            const id = movie.id;
            const movieDetails = this.props.movieDetails;
        if (movieDetails.length > 0) {
            this.props.navigator.push({
               title: movie.title,
               component: MovieDetail,
               passProps: { movie: find(movieDetails, { id }) }
            });
        }
        return null;
    }

    renderRow = (movie) => {
        return (
            <TouchableHighlight onPress={() => this.showMovieDetail(movie)}  underlayColor="#dddddd">
                <View>
                    <View style={styles.container}>
                        <Image source={{uri: `${BASE_IMAGE_URL}${movie.poster_path}`}}
                                    style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{movie.title}</Text>
                            <Text style={styles.author}>{movie.release_date}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator
                    size="large"/>
                <Text>
                    Retreiving Movies ...
                </Text>
            </View>
        );
    }

    render() {
        const { dataSource, isLoading } = this.props;
        if (isLoading) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this.renderRow}
                style={styles.listView}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listView: {
        marginTop: 60,
        marginBottom: 50,
        backgroundColor: '#F5FCFF'
    },
    loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
});

module.exports = MovieList;
