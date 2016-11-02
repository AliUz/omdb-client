/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, StyleSheet, View, NavigatorIOS } from 'react-native';

const Search = require('./search');

type State = { animating: boolean; };
type Timer = number;

class omdbClient extends Component {
  state: State;
  _timer: Timer;

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
          style={{
            flex: 1
          }}
          initialRoute={{
            component: Search,
            title: 'Search'
          }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

AppRegistry.registerComponent('omdbClient', () => omdbClient);
