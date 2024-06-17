import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AnimatedComponents from './src/chapter2/AnimatedComponents';
import AnimatedValue from './src/chapter2/AnimatedValue';
import AnimatedTiming from './src/chapter2/AnimatedTiming';
import AnimatedProperty from './src/chapter2/AnimatedProperty';
import Carousel from './src/chapter2/catalin/Carousel';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Carousel /> */}
      <AnimatedProperty />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
