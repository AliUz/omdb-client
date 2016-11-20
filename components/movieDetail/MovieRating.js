import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';


const MovieRating = ({ movie }) => {
    const vote = movie.imdbRating;
    const totalVotes = movie.imdbVotes;
    const metaScore = movie.Metascore;
    return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
            <Image style={styles.rating} source={require('../../assets/rating-black.png')} />
            <Text style={styles.vote}>{vote}</Text>
            <Text style={styles.total}> / 10 </Text>
            <Text style={styles.metaScore}>{metaScore}</Text>
            <Text style={styles.metaScoreText}> Metascore</Text>
        </View>
        <Text style={styles.totalVotes}>{totalVotes}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 5
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    rating: {
        width: 35,
        height: 35,
        marginLeft: 10,
        top: 5
    },
    vote: {
        marginLeft: 10,
        fontSize: 13,
        fontWeight: '600',
        alignSelf: 'center'
    },
    total: {
        fontSize: 11,
        alignSelf: 'center',
        color: '#6b6b6b'
    },
    metaScore: {
        height: 20,
        marginLeft: 100,
        marginTop: 15,
        alignSelf: 'center',
        backgroundColor: '#ccc',
        paddingTop: 2,
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 2,
        textAlign: 'center',
        color: 'white'
    },
    metaScoreText: {
        marginLeft: 5,
        marginTop: 15,
        alignSelf: 'center'
    },
    totalVotes: {
        width: 45,
        marginLeft: 55,
        color: '#6b6b6b',
        fontSize: 12,
        bottom: 15
    }
});

export default MovieRating;
