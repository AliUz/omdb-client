import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const MovieOverview = ({ props }) => {
    console.log(props);
    return (
        <View style={styles.container}>
            {this.props.children}
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
