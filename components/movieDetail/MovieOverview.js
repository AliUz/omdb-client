import React from 'react-native';
import {
    StyleSheet,
    View
} from 'react-native';

const MovieOverview = ({ props }) => {
    if (this.props) {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
    return null;
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
