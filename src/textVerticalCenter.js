'use strict';
import React, {Component} from 'react';
import {View,Text,StyleSheet,Alert} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    world:{
        // flex:1,
        //height:60,
        borderWidth:1,
        borderColor:'black',
        fontSize:32,
        fontWeight:'400',
        textAlign:'center'
    }
});

export class App extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.world}>Hello world!!!</Text>
            </View>
        );
    }

    componentDidMount(){
        Alert.alert('render end........');
    }

}
