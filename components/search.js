'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, TextInput } from 'react-native';

const SearchResults = require('./searchResults');

class Search extends Component {

    constructor (props) {
        super(props);
        this.onSearchPressed = this.onSearchPressed.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = { { borderBottomWidth: 2, borderColor: '#8A0917', width: 250 } }>
                    <TextInput
                        onChangeText = { (text) => this.setState({ searchQuery: text }) }
                        style = { styles.input }
                        placeholder = "SEARCH"
                        autoCapitalize = "characters"
                    />
                </View>
                <TouchableHighlight onPress={ this.onSearchPressed } style={ styles.button }>
                  <Text style={ styles.buttonText }>SEARCH</Text>
                </TouchableHighlight>
            </View>
        );
    }

    onSearchPressed() {
        this.props.navigator.push({
            component: SearchResults,
            title: 'Results',
            passProps: {
                searchQuery: this.state.searchQuery,
                navigationBarHidden: this.state.navigationBarHidden
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        padding: 10
    },
    logo: {
        width:66,
        height:55
    },
    heading: {
        fontSize: 30,
        marginTop: 10
    },
    input: {
        color: '#2A2C2B',
        height: 50,
        marginTop: 200,
        padding: 4,
        fontSize: 20,
        fontWeight: '900',
        fontFamily: 'Helvetica-Bold',
        textAlign: 'center',
        borderColor: '#B9121B'
    },
    button: {
        height: 50,
        width: 100,
        // alignSelf: 'stretch',
        marginTop: 50,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4C1B1B',
        alignSelf: 'center'
    }
});

module.exports = Search;
