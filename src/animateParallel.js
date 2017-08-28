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
    state = {
        fadeAnim: new Animated.Value(0)
    }

    render(){
        let {fadeAnim} = this.state;
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={require('../img/doge.jpg')}
                    style={{
                        width:48,
                        height:56,
                        left:(() => {
                            return fadeAnim.interpolate({
                                inputRange:[0,1],
                                outputRange:[-100, 100]
                            });
                        })(),
                        opacity:(() => {
                            return fadeAnim.interpolate({
                                inputRange:[0,1],
                                outputRange:[0.3,1]
                            })
                        })(),
                        transform:[{
                            rotate : (() => {
                                return fadeAnim.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['0deg','360deg']
                                })
                            })()
                        },{
                            scale: (() => {
                                return fadeAnim.interpolate({
                                    inputRange:[0,1],
                                    outputRange:[0.5,1.5]
                                })
                            })()
                        }]
                    }}
                />
            </View>
        );
    }

    componentDidMount(){
        this.animate();
    }

    animate(){
        this.state.fadeAnim.setValue(0);
        Animated.timing(this.state.fadeAnim,{
            toValue:1,
            duration:1000,
            easing: Easing.linear
        }).start(() => {
            this.animate();
        })
    }
}
