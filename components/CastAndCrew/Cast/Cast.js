'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';

import Profile from './Profile';

class Cast extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { cast } = this.props;
        const profiles = cast.map(castMember => {
            return <Profile key={castMember.id} cast={castMember}/>;
        });
        return (
            <ScrollView
                contentContainerStyle={styles.container}
                horizontal={true}>
                {profiles}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
    }
});

export default Cast;
