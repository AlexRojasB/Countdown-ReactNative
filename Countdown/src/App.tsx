/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Store from './store/Store';
import {CountdownScreen} from './screens';
const App: () => Node = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <CountdownScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
