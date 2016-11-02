'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, TouchableHighlight, Text, TextInput, Picker, Item} from 'react-native';

const SearchResults = require('./searchResults');

class Search extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selected: 'key0',
            selected1: 'key1',
            selected2: 'key2',
        };
        this.onSearchPressed = this.onSearchPressed.bind(this);
    }

    // onValueChange(key: string, value: string) {
    //   const newState = {};
    //   newState[key] = value;
    //   this.setState(newState);
    // };

    render() {  
        return (
            <View style={styles.container}> 
                <TextInput 
                    onChangeText={(text) => this.setState({searchQuery: text})}
                    style={styles.input} 
                    placeholder='Search Query'>
                </TextInput>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.selected}>
                  <Item label="2004" value="key0" />
                  <Item label="2005" value="key1" />
                  <Item label="2006" value="key2" />
                </Picker>
                <TouchableHighlight 
                    onPress={this.onSearchPressed}
                    style={styles.button}
                  >
                  <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
            </View>
        );
    }

    onSearchPressed() {
        this.props.navigator.push({
            component: SearchResults,
            title: 'Results',
            passProps: {
                searchQuery: this.state.searchQuery
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
        padding: 10
    },
    picker: {
      width: 100,
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
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth:1,
        borderColor:'#48bbec'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    }
})

module.exports = Search;