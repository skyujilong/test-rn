/**
 * 依次执行
 */
'use strict';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    //动画主体
    Animated,
    //动画库函数
    Easing
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:48,
        height:56
    }
});

export class App extends React.Component {
    constructor(){
        super();
        this.state = {
            left: new Animated.Value(0),
            rotate: new Animated.Value(0)
        };
    }
    render(){
        let {left,rotate} = this.state;
        //debugger;
        let imgStyles = Object.assign({
            width:48,
            height:56
        }, {
            transform:[
                {
                    rotate: rotate.interpolate({
                        inputRange:[0,1],
                        outputRange:['0deg','360deg']
                    })
                }
            ],
            left: left.interpolate({
                inputRange:[0,1],
                outputRange:[0,50]
            })
        });
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={require('../img/doge.jpg')}
                    style={imgStyles}
                />
            </View>
        );
    }
    componentDidMount(){
        Animated.sequence([
            Animated.delay(400),
            Animated.timing(this.state.rotate,{
                toValue:1,
                duration:1000,
                easing: Easing.linear
            }),
            Animated.timing(this.state.left,{
                toValue:-1,
                duration:1500,
                easing:Easing.linear
            })
        ]).start();
    }
}
