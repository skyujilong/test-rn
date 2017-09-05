/**
 * 蒙版效果测试
 */

'use strict';
import React from 'react';
import {
    Modal,
    Tet,
    TouchableHighlight,
    View,
    ScrollView,
    StyleSheet,
    Platform,
    StatusBar,
    Text,
    Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';

const style = StyleSheet.create({
    mainBar: {
        height:40
    },
    container: {
        flex:1,
        backgroundColor:'black'
    }
});

class MainScreen extends React.Component {
    static navigationOptions = {
        //title: 'Welcome',
        //可以定义title默认的样式
        headerStyle:{
            paddingTop:30,
            backgroundColor:'#fff'
        },
        //在header:null的时候默认不加载顶部导航
        //同时也可以返回一个react组件，该组件会被渲染成顶部的title bar
        header: ()=>{
            return (
                <View style={style.mainBar}>
                    <Text>hello world</Text>
                </View>
            );
        }
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>
                <Button title="Go to Jane's profile" onPress={() => navigate('Profile', {name: 'Jane'})}/>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    height:200
                }}>
                {/* flex布局，display:flex,之后内部的子元素根据flex:1 这样的数字占比进行排列，
                    用flex布局做垂直居中，line-height 在rn中是坨屎 */}
                    <View style={{
                        flex:1,
                        backgroundColor:'#fff'
                    }}></View>
                    <View style={{
                        flex:1,
                        backgroundColor:'yellow'
                    }}></View>
                </View>
            </View>
        );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({title: navigation.state.params.name});
    render() {
        const {goBack} = this.props.navigation;
        return (
            <Button title="Go back" onPress={() => goBack()}/>
        );
    }
}
//TODO android 顶部原生自带的 bar把 rn的bar给覆盖了？
const BasicApp = StackNavigator({
    Main: {
        screen: MainScreen
    },
    Profile: {
        screen: ProfileScreen
    }
});
export const App = (() => <BasicApp/>);
