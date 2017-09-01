/**
 * 布局相关测试
 */
'use strict';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    PixelRatio
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    boxA:{
        backgroundColor:'red',
        height:40,
        flexDirection:'row'
    },
    boxB:{
        backgroundColor:'blue',
        height:40,
        width:40
    },
    boxC:{
        backgroundColor:'yellow',
        height:40,
        width:40,
        right:0,
        top:0,
        position:'absolute',
        display:'none'
    },
    boxD:{
        backgroundColor:'black',
        height:80
    },
    msgBox:{
        // height:100,
        flexDirection:'row',
        backgroundColor:'#efefef',
        alignItems:'center', //规定子元素在交叉轴上如何对齐
        flexWrap:'wrap',//子元素排满父元素换行
        //justifyContent:'space-around', 属性定义了项目(子元素)在主轴上的对齐方式。
        paddingTop:24,
        paddingBottom:24,
        paddingLeft:32,
        paddingRight:32
    },
    topic:{
        color:'#9E7D64',
        fontSize:32/2,
        fontWeight:'200',
        textAlign:'center',
        height:64/2,
        lineHeight:30,
        paddingLeft:15/2,
        paddingRight:15/2,
        borderWidth:1/PixelRatio.get(),
        borderColor:'#9E7D64',
        borderRadius:10/2,
        marginTop:10/2,
        marginLeft:12
    }

});

export class App extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.boxA}>
                    <View style={styles.boxB}></View>
                    <View style={styles.boxB}></View>
                    <View style={styles.boxC}></View>
                </View>
                {/* 我曹！ 这里的style竟然可以接受一个数组style={[a,b,c,d]} */}
                <View style={styles.boxD}>
                    <View style={styles.boxC}></View>
                </View>
                <View style={styles.msgBox}>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                    <Text onPress={(el) => {
                        this.press(el)
                    }} style={styles.topic}>大和大和</Text>
                </View>
            </View>
        );
    }
    press(el){
        Alert.alert('touch.....');
    }
}
