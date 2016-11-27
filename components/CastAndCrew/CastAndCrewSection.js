'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class CastAndCrewSection extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Cast & Crew</Text>
                    <Text style={styles.subHeader}>Top Billed Cast</Text>
                </View>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
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

module.exports = CastAndCrewSection;
