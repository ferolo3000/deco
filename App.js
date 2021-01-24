import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import * as Font from 'expo-font'
import AppNavigator from './src/navigations/Navigator'
import AppLoading from 'expo-app-loading'

export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Bold': require('./src/fonts/Montserrat-ExtraBold.ttf'),
      'Medium': require('./src/fonts/Montserrat-Medium.ttf'),
      'Regular': require('./src/fonts/Montserrat-Regular.ttf'),
    });
    this.setState({ isFontLoaded: true })
  }
  render() {
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator />) : (<AppLoading />)
    );
  }

}
