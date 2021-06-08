/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Color from 'react-native-material-color';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{
              title: 'First Page', //Set Header Title
              headerStyle: {
                backgroundColor: Color.PINK[500], //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="SecondPage"
            component={SecondPage}
            options={{
              title: 'Second Page', //Set Header Title
              headerStyle: {
                backgroundColor: Color.DEEPORANGE[400], //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="ThirdPage"
            component={ThirdPage}
            options={{
              title: 'Third Page', //Set Header Title
              headerStyle: {
                backgroundColor: '#f4511e', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
