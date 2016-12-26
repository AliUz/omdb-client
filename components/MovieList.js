'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ActivityIndicator
} from 'react-native';
import { find } from 'lodash';
import MovieDetail from './MovieDetail';
import MovieRow from './MovieRow';

class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    handleOnPress = (movie) => {
        const id = movie.id;
        const movies = this.props.movies;
        if (movies.length > 0) {
            this.props.navigator.push({
               title: movie.title,
               component: MovieDetail,
               passProps: { movie: find(movies, { id }) }
            });
        }
        return null;
    }

    renderRow = (movie) => {
        return (
            <MovieRow
                handleOnPress={this.handleOnPress}
                movie={movie}
            />
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
