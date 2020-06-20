/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import mockMovies from './mock/movies'

function moviesReducer(state = mockMovies.Search, action) {
  return state
}
const store = createStore(moviesReducer)

import Home from './src/containers/Home';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

export default App;
