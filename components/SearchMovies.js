'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS
} from 'react-native';
import queryString from 'query-string';
import SearchResults from './SearchResults';
import { API_KEY, BASE_IMAGE_URL } from '../config.js';

let BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`;

class SearchMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieTitle: '',
            isLoading: false,
            errorMessage: ''
        };
    }

    handleMovieTitleChange = (event) => {
        this.setState({ movieTitle: event.nativeEvent.text })
    }

    searchMovies = () => {
        this.fetchMovies();
    }

    fetchMovies() {
        if (this.state.movieTitle !== '') {
            const movieQuery = queryString.stringify({ query: this.state.movieTitle });
            console.log(`movieQuery >>>> ${movieQuery}`);
            BASE_URL = `${BASE_URL}&${movieQuery}`;
        }
        console.log(`URL: >>>> ${BASE_URL}`);
        fetch(BASE_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ isLoading: false });
                if (responseData.results) {
                    this.props.navigator.push({
                        title: 'Search Results',
                        component: SearchResults,
                        passProps: { movies: responseData.results }
                    });
                } else {
                    this.setState({ errorMessage: 'No results found '});
                }
            })
            .catch(error =>
                this.setState({
                    isLoading: false,
                    errorMessage: error
                })
            )
            .done();
    }

    render() {
        const spinner = this.state.isLoading ?
            ( <ActivityIndicatorIOS
                hidden="true"
                size="large"/> ) :
            ( <View/> );
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}> Search by Movie Title</Text>
                <View>
                    <Text style={styles.fieldLabel}> Movie Title </Text>
                    <TextInput style={styles.searchInput} onChange={this.handleMovieTitleChange}/>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#f1c40f"
                    onPress={this.searchMovies}>
                    <Text style={styles.buttonText}> Search </Text>
                </TouchableHighlight>
                {spinner}
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        padding: 10
    },
    searchInput: {
        height: 36,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 0.5,
        flex: 1,
        borderRadius: 4,
        padding: 5
    },
    button: {
        height: 36,
        backgroundColor: 'lightslategray',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    instructions: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 15
    },
    fieldLabel: {
        fontSize: 15,
        marginTop: 15
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red'
    }
});

module.exports = SearchMovies;
