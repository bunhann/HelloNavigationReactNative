import React, { Component } from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

import Color from 'react-native-material-color';

export default class SecondPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 16 }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 25,
                                textAlign: 'center',
                                marginBottom: 16
                            }}>
                            This is Second Page of the App
          </Text>
                        <Button
                            title="Go back"
                            onPress={() => this.props.navigation.goBack()}
                        />
                        <Button
                            title="Go to SecondPage... again"
                            onPress={() => this.props.navigation.push('SecondPage')}
                        />
                        <Button
                            title="Replace this screen with Third Page"
                            onPress={() =>
                                this.props.navigation.replace('ThirdPage', {
                                    someParam: 'Param',
                                })
                            }
                        />
                        <Button
                            title="Reset navigator state to Third Page"
                            onPress={() =>
                                this.props.navigation.reset({
                                    index: 0,
                                    routes: [
                                        {
                                            name: 'ThirdPage',
                                            params: { someParam: 'reset' },
                                        },
                                    ],
                                })
                            }
                        />
                        <Button
                            title="Go to First Page"
                            onPress={() => this.props.navigation.navigate('FirstPage')}
                        />
                        <Button
                            title="Go to Third Page"
                            onPress={() =>
                                this.props.navigation.navigate(
                                    'ThirdPage', { someParam: 'Param1' }
                                )
                            }
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: Color.AMBER[200]
                        }}>
                        Navigate Between Screens using
          {'\n'}
          React Navigation
        </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: Color.Blue
                        }}>
                        www.aboutreact.com
        </Text>
                </View>
            </SafeAreaView>
        );
    }
}