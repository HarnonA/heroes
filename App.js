/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';
import Comp from './src/pages/Home'

class App extends Component {

  render() {

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.header} >MARVEL</Text>
            <Comp />
          </ScrollView>
        </SafeAreaView>
      </>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f00',
    color: '#fff',
    width: '100%',
    padding: 10,
    textAlign: 'center',
    fontSize: 32,
  },
  scroll:{
    backgroundColor: '#000',

  }
});

export default App;
