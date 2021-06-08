import React, { Component } from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

import Color from 'react-native-material-color';

export default class ThirdPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
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
                            This is Third Page of the App
            {'\n'}
                            {this.props.route.params.someParam}
                        </Text>
                        {this.props.route.params.someParam != 'reset' ?
                            <Button
                                title="Go back"
                                onPress={() => this.props.navigation.goBack()}
                            />
                            : null
                        }
                        <Button
                            onPress={() => this.props.navigation.navigate('SecondPage')}
                            title="Go to Second Page"
                        />
                        <Button
                            title="Reset navigator to First Page"
                            onPress={() =>
                                this.props.navigation.reset({
                                    index: 0,
                                    routes: [
                                        {
                                            name: 'FirstPage',
                                            params: { someParam: 'reset' },
                                        },
                                    ],
                                })
                            }
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: 'grey'
                        }}>
                        Navigate Between Screens using{'\n'}React Navigation
        </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: 'grey'
                        }}>
                        www.aboutreact.com
        </Text>
                </View>
            </SafeAreaView>
        );
    }

}