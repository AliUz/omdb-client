import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

const MovieOverview = ({ movie }) => {

    return (
        <View style={styles.container}>
            {this.props.children};
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        borderTopWidth: 0.5,
        borderBottomWidth: 1,
        borderTopColor: 'white',
        borderBottomColor: '#ddd'
    }
});

export default MovieOverview;
