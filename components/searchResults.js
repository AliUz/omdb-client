'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import GridView from 'react-native-grid-view'
import Movie from './movie';

class SearchResults extends Component {

    constructor (props) {
        super(props);
        this.state = {
            showProgress: true,
            searchQuery: props.searchQuery,
        };
    }

    componentDidMount () {
        this.doSearch();
    }

    doSearch () {
        const url = 'https://q46t3jsa1i.execute-api.eu-central-1.amazonaws.com/test/movies';
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.searchQuery
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.movies);
                this.setState({
                    movies: responseData.movies,
                });
            })
            .finally(() => {
                this.setState({
                    showProgress:false
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderItem(item) {
        return <Movie movie={item} key={item.imdb}/>;
    }

    render() {
        if (this.state.showProgress) {
          return (
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <ActivityIndicator
                  size="large"
                  animating={this.state.showProgress} />
            </View>
          );
        }
        return (
            <GridView
                items={this.state.movies}
                itemsPerRow={1}
                renderItem={this.renderItem}
                style={styles.listView}
            />
        );
    }
}

var styles = StyleSheet.create({
    base: {
        height: 100,
        width: 100
    },
    listView: {
        paddingTop: 80,
    },
});

module.exports = SearchResults;
