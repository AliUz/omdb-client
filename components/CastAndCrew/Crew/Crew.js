'use strict';

import React, { Component } from 'react';
import {
  View
} from 'react-native';

class Crew extends Component {

    constructor(props) {
        super(props);
    }
    render() {
      const { crew } = this.props;
      return (
          <View/>
      );
    }
}

module.exports = Crew;
