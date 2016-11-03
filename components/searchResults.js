'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, ScrollView, Text, Image, ListView } from 'react-native';

class SearchResults extends Component {

    constructor (props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            showProgress: true,
            searchQuery: props.searchQuery,
            dataSource: ds
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
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
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
          return (
            <View key={i} style={ styles.viewContainer }>
              <Image
              style={ styles.base }
              source={{ uri: movie.poster.replace('http://', 'https://') }} />
              {/* <View>
                <Text>{movie.title} - {movie.year}</Text>
              </View> */}
            </View>
          );
        });
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
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData.title}</Text>}
            />
        );
    }
}

var styles = StyleSheet.create({
      base: {
        height: 100,
        width: 100
      },
      container: {
        paddingLeft:20,
        paddingRight:20,
        marginTop: 100,
        flex: 1,
        flexDirection:'row',
      },
      viewContainer:{
        // flexDirection:'row',
        // justifyContent: 'flex-start',
        // flexWrap: 'wrap',
        // alignItems: 'center',
        flex: 1
      }
});

module.exports = SearchResults;
