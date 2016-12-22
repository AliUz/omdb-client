'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    NavigatorIOS
} from 'react-native';

import MovieListContainer from '../containers/MovieListContainer';

class NowPlaying extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Now Playing',
            component: MovieListContainer
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
