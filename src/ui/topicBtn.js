/**
 * 测试自定义button
 */
'use strict';
import React from 'react';
import {TouchableOpacity,Text,StyleSheet,Alert,PixelRatio,View} from 'react-native';
const styles = StyleSheet.create({
    topic:{
        color:'#9E7D64',
        fontSize:32/2,
        fontWeight:'200',
        textAlign:'center',
        textAlignVertical:'center',
        // alignItems:'center',
        justifyContent:'center',
        marginTop:0,
        height:32
    },
    outBox:{
        // height:32,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:15/2,
        paddingRight:15/2,
        borderWidth:1/PixelRatio.get(),
        borderColor:'#9E7D64',
        borderRadius:10/2,
        marginTop:10/2,
        marginLeft:12
    }

});
export class TopicBtn extends React.Component {
    render(){
        return (
            <TouchableOpacity onPress={(e) => {
                this.press(e);
            }}>
                <View style={styles.outBox}>
                    <Text style={styles.topic}>点击透明回馈效果</Text>
                </View>
            </TouchableOpacity>
        );
    }
    press(e){
        Alert.alert('hello world!');
    }
}
