'use strict';

import React, { Component } from 'react';

import { API_KEY } from '../config.js';
import CastAndCrew from '../components/CastAndCrew';

class CastAndCrewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cast: [],
            crew: []
        };
    }

    componentDidMount() {
        this.fetchCastAndCrew();
    }

    fetchCastAndCrew = () => {
        const movieId = this.props.movie.id;
        const REQUEST_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    cast: responseData.cast,
                    crew: responseData.crew
                });
            })
            .done();
    }

    render() {
        const crew = this.state.crew;
        const cast = this.state.cast;
        if (!crew || !cast) {
            return null;
        }
        return <CastAndCrew crew={crew} cast={cast} />;
    }
}

module.exports = CastAndCrewContainer;
