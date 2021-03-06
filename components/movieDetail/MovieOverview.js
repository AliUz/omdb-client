import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

class MovieOverview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
              movie: this.props.movie
            });
        });
        return (
            <View style={styles.container}>
                {childrenWithProps}
            </View>
        );
    }
}

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
