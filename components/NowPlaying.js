'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    NavigatorIOS
} from 'react-native';

import MovieList from './MovieList';

class NowPlaying extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Now Playing',
            component: MovieList
            }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

module.exports = NowPlaying;
