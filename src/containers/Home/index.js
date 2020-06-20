import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native'
// import movies from '../../../mock/movies'
import MovieRow from '../../components/MovieRow';
import {connect} from 'react-redux'

class Home extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     movies: movies.Search
        // }
    }
    handlePress = (item) => {
      Alert.alert(item.imdbID)
    }

    async componentDidMount(){
      const response = await fetch('http://www.omdbapi.com/?apikey=44780b0d&s=batman')
      const data = await response.json()
      // alert('hellooo')
    }
    render() {
      const { movies } = this.props
      console.log(movies)
      return (
        <View>
          <TouchableOpacity onPress={() => {alert("ss")}}>
            <Text>ssss</Text>
          </TouchableOpacity>
          <FlatList
            data={movies}
            renderItem={({ item:movie }) => {
              return (
                <TouchableOpacity onPress={this.handlePress.bind(this,movie)}>
                  <MovieRow movie={movie}></MovieRow>
                </TouchableOpacity>
              )}
            }
            keyExtractor={(movie) => movie.imdbID}
          />
        </View>
      );
    }
}

function mapStateToProps(state){
  return {
    movies: state
  }
}

// function mapDispatch/

export default connect(
  mapStateToProps,
)(Home)