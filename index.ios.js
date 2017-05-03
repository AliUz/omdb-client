/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import MovieDB from './App';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <MovieDB/>
    </Provider>
);

AppRegistry.registerComponent('MovieDB', () => App);
