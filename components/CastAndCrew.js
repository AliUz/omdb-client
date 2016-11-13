'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';

import Profile from './Profile';

import { API_KEY } from '../config.js';

class CastAndCrew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cast: [],
            crew: []
        };
    }

    componentDidMount() {
        this.fetchCastAndCrew();
    }

    fetchCastAndCrew = () => {
        const movieId = this.props.movie.id;
        const REQUEST_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    cast: responseData.cast,
                    crew: responseData.crew
                });
            })
            .done();
    }

    render() {
        const cast = this.state.cast;
        const crew = this.state.crew;
        const profiles = cast.map(castMember => {
            return <Profile key={castMember.id} cast={castMember}/>;
        });
        return (
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.header}>Cast & Crew</Text>
                    <Text style={styles.subHeader}>Top Billed Cast</Text>
                </View>
                <ScrollView
                    contentContainerStyle={styles.profileContainer}
                    horizontal={true}>
                    {profiles}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headingContainer: {},
    profileContainer: {
        marginBottom: 5,
    },
    header: {
        marginLeft: 10,
        fontWeight: '500'
    },
    subHeader: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 12,
        fontWeight: '300'
    }
});

module.exports = CastAndCrew;
