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

import MovieDetail from './MovieDetail';
import { API_KEY, BASE_IMAGE_URL } from '../config.js';

const REQUEST_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        this.fetchNowPlaying();
    }

    fetchNowPlaying = () => {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.results),
                    isLoading: false
                });
            })
            .done();
    }

    showMovieDetail = (movie) => {
       this.props.navigator.push({
           title: movie.title,
           component: MovieDetail,
           passProps: { movie }
       });
   }

    renderBook = (movie) => {
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
                    Loading Movies...
                </Text>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBook}
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
        backgroundColor: '#F5FCFF'
    },
    loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
});

module.exports = MovieList;
