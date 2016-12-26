'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
    ListView
} from 'react-native';
import MovieDetail from '../containers/MovieDetailContainer';
import { BASE_IMAGE_URL } from '../config.js';

class SearchResults extends Component {

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.movies)
        };
    }

    renderMovie = (movie) => {
        return (
            <TouchableHighlight onPress={() => this.showMovieDetail(movie)} underlayColor="#dddddd">
                <View>
                    <View style={styles.cellContainer}>
                        <Image
                            source={{ uri: `${BASE_IMAGE_URL}${movie.poster_path}`}}
                            style={styles.thumbnail}/>
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

    showMovieDetail = (movie) => {
        this.props.navigator.push({
            title: movie.title,
            component: MovieDetail,
            passProps: { movie }
        });
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: '#F5FCFF'
    },
    cellContainer: {
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
    }
});

export default SearchResults;
