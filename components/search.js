'use strict';

import React, { Component } from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';

import SearchMovies from './SearchMovies';

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Search Movies',
            component: SearchMovies
            }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Search;
