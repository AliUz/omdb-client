import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';

class MovieDetailPage extends Component {
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
            <ScrollView contentContainerStyle={styles.container}>
                {childrenWithProps}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        paddingBottom: 50
    }
});

export default MovieDetailPage;
