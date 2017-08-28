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
/**
 * 创建style
 * @type {[type]}
 */
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export class App extends React.Component {
    constructor(){
        super();
        this.state = {
            spinValue: new Animated.Value(0)
        };
        console.log(this.state);
    }
    componentDidMount(){
        this.spin();
    }
    spin(){
        this.state.spinValue.setValue(0);
        Animated.timing(
            this.state.spinValue,
            {
                toValue:1,
                duration:1000,
                //默认提供三种标准动画 linear、quad、cubic
                easeing: Easing.cubic(0,0,1,1)
            }
        ).start(() => {
            this.spin();
        });
    }
    render(){
        let {spinValue} = this.state;
        //转化对应的值到指定的范围
        let spin = spinValue.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        });
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width:48,
                        height:56,
                        //transform放在style中
                        transform: [{"rotate": spin}]
                    }}
                    source={require('../img/doge.jpg')}
                />
            </View>
        );
    }
}
