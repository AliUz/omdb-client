'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import { BASE_IMAGE_URL } from '../../../config.js';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image;
        const cast = this.props.cast;
        const profileImageUri = `${BASE_IMAGE_URL}${cast.profile_path}`;
        if (cast.id === 71580) { // Shitty hack for Benedict Cumberbatch, profile_path image gets stretched out.
            image = <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500/gJmGwEsEcpPsJ4vjrh3nJiooZ7B.jpg'}} />;
        } else {
        image = cast.profile_path ?
            <Image style={styles.image} source={{uri: profileImageUri}} /> :
            <Image style={styles.image} source={require('../../../assets/default_profile.jpg')} />;
        }
        return (
            <View style={styles.container}>
                {image}
                <Text style={styles.name}>{cast.name}</Text>
                <Text style={styles.character}>{cast.character}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 100,
    },
    image: {
        left: 10,
        marginTop: 5,
        marginRight: 5,
        width: 90,
        height: 132
    },
    name: {
        textAlign: 'center',
        left: 10,
        fontSize: 10,
        fontWeight: 'bold'
    },
    character: {
        textAlign: 'center',
        left: 10,
        marginTop: 3,
        fontSize: 11,
    }
});

export default Profile;
