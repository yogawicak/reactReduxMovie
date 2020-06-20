import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const MovieRow = ({movie}) => {
    return(
        <View style={style.container}>
            <Image source={{uri:movie.Poster}} style={style.poster}></Image>
            <View style={{flex:0.80,marginRight:20}}>
                <Text style={style.text}>{movie.Title}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('ssss')}>
                <Icon name='heart-o' size={36} color='red'/>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        padding:5,
        alignItems:'center'
    },
    poster:{
        height:100,
        width:70,
        resizeMode:"contain",
    },
    text:{
        fontSize:17
    }
})

export default MovieRow;
