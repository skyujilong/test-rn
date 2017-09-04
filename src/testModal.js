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

const style = StyleSheet.create({scrollView: {}});

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        // header: null
    };
    render() {
        const {navigate} = this.props.navigation;
        return (<Button title="Go to Jane's profile" onPress={() => navigate('Profile', {name: 'Jane'})}/>);
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({title: navigation.state.params.name});
    render() {
        const {goBack} = this.props.navigation;
        return (<Button title="Go back" onPress={() => goBack()}/>);
    }
}

const BasicApp = StackNavigator({
    Main: {
        screen: MainScreen
    },
    Profile: {
        screen: ProfileScreen
    }
});
export const App = (() => <BasicApp/>);
