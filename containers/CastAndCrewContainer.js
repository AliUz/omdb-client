'use strict';

import React, { Component } from 'react';

import CastAndCrew from '../components/CastAndCrew';
import * as requests from '../services';

class CastAndCrewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cast: [],
            crew: []
        };
    }

    componentDidMount() {
        const id = this.props.movie.id;
        this.fetchCastAndCrew(id);
    }

    fetchCastAndCrew = (id) => {
        return requests.fetchCastAndCrew(id)
          .then((response) => {
              this.setState({
                  cast: response.cast,
                  crew: response.crew
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

export default CastAndCrewContainer;
