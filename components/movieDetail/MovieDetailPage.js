import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';

class MovieDetailPage extends Component {
    constructor(props) {
        super(props);
    }

    renderChildsWithProps(children, movie) {
      if (!children) {
        return [];
      }

      return React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          movie: movie
        });
      });
    }

    render() {
        const { children, movie } = this.props;

        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.renderChildsWithProps(children, movie)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50
    }
});

export default MovieDetailPage;
