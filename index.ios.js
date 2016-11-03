/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';

import Search from './components/search';

class omdbClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  render() {
    return (
      <NavigatorIOS
          style={{ flex: 1 }}
          initialRoute={{
            component: Search,
            title: ''
          }}
      />
    );
  }
}

AppRegistry.registerComponent('omdbClient', () => omdbClient);
