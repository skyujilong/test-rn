import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    WebView,
    ScrollView,
    TextInput,
    NavigatorIOS
} from 'react-native';
import Dimensions from 'Dimensions';

class NewPage extends React.Component {
    render(){
        let {myProp} = this.props;
        console.log(myProp);
        return (
            <View>
                <Text>测试页面</Text>
            </View>
        );
    }
}


export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:'测试代码!XX'
        };
    }
    render() {
        let {width,height} = Dimensions.get('window');
        return (
            <View style={{backgroundColor:'#fff'}}>
                <NavigatorIOS initialRoute={{
                    component:NewPage,
                    title:'测试页面',
                    passProps:{myProp:'foo'}
                }}/>
                <View>
                    <ScrollView style={{top:60}} contentContainerStyle={styles.container}>
                        <View>
                            <Text>helloworld!!!222221111</Text>
                            <Text>为什么没有刷新出来内容那？webview是怎么回事？123</Text>
                        </View>

                        <View>
                            <Button onPress={() => {
                                Alert.alert('press me！！231');
                            }} title="hello world!"/>
                        </View>

                        <View>
                            <Image style={{
                                width: 50,
                                height: 50
                            }} source={{
                                uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503478376217&di=679b9ae0db96a82e075f46b27d13eeaf&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D489281e5888ba61ecbe3c06c295dfd7f%2Fa9d3fd1f4134970ac9e997009fcad1c8a7865d03.jpg'
                            }}/>
                            <Image style={{
                                width: 105,
                                height: 54
                            }} source={{
                                uri: 'http://www.alloyteam.com/wp-content/uploads/2015/07/logo-e1485056491948.png'
                            }}/>
                        </View>

                        <View>
                            <Text style={{fontSize:24,lineHeight:42}}>{this.state.text}</Text>
                            <TextInput style={{height:42,lineHeight:42,width:200,borderColor:'black',borderWidth:1}} onChangeText={(text) => {
                                this.setState({text});
                            }} value={this.state.text}/>
                        </View>
                        <View style={{flex:1,height:1200}}>
                            <WebView
                                source={{uri: 'https://github.com/facebook/react-native'}}
                                style={{marginTop: 20,width:width,height:1200}} onLoad={() => {
                                    Alert.alert('webview加载完毕!');
                                }}
                                startInLoadingState={true}
                                scrollEnabled={false}
                                onNavigationStateChange={(nav) => {
                                    //TODO 可以根据这个 来获取整个html页面的高度，前提条件是内嵌的html页面在title上将整个doc的高度获取到
                                    //TODO 另外可以采用postMessage的方案来进行 webview与native的交互
                                    // console.log(nav);
                                }}
                            />
                        </View>
                        <View>
                            <Text>haha 翻页吧！！！</Text>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    red: {
        //   fontSize:16,
        color: 'red'
    },
    font20: {
        fontSize: 20
    }
});
