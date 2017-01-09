'use strict';

import React, { Component } from 'react';
import CastAndCrewSection from './CastAndCrew/CastAndCrewSection';
import Cast from './CastAndCrew/Cast/Cast';
import Crew from './CastAndCrew/Crew/Crew';

class CastAndCrew extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { cast, crew } = this.props;
        return (
            <CastAndCrewSection>
              <Cast cast={cast}/>
              <Crew crew={crew}/>
            </CastAndCrewSection>
        );
    }
}

export default CastAndCrew;
