import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import AnimatedComponents from './src/chapter2/AnimatedComponents';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        <AnimatedComponents />
      </View>
    </SafeAreaView>
  );
}
