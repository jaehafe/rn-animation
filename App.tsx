import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import AnimatedComponents from './src/chapter2/AnimatedComponents';
import AnimatedValue from './src/chapter2/AnimatedValue';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        {/* <AnimatedComponents /> */}
        <AnimatedValue />
      </View>
    </SafeAreaView>
  );
}
