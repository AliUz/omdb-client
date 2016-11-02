'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, ListView, ScrollView, TouchableHighlight, Text, Image } from 'react-native';

class SearchResults extends Component {

    constructor (props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds,
            showProgress: true,
            searchQuery: props.searchQuery
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

    listMovies() {
        const movies = this.state.movies;
        return movies.map((movie, i) => {
          return(
            <View key={i} style={ styles.viewContainer }>
              <Image 
              style={ styles.base } 
              source={{ uri: movie.poster.replace('http://', 'https://') }} />
              <View>
                <Text>{movie.title} - {movie.year}</Text>
              </View>
            </View>
          );
        });
    }

    render() {
        if (this.state.showProgress) {
          return (
            <View style={{
              flex: 1, 
              justifyContent: 'center'
            }}>
              <ActivityIndicator
                  size="large"
                  animating={this.state.showProgress} />
            </View>
          );
        }
        return (
          <ScrollView style={ styles.container }>
            <Text> Search Results </Text>
            {this.listMovies()}
          </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
      base: {
        height: 200,
        width: 200
      },
      container: {
        paddingLeft:20,
        paddingRight:20,
        marginTop: 100
      },
      viewContainer:{
        flexDirection:'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        flex: 1
      },
      repoCell: {
        width: 50,
        alignItems: 'center'
      },
      repoCellIcon: {
        width: 20,
        height: 20
      },
      repoCellLabel: {
        textAlign: 'center'
      }
});

module.exports = SearchResults;