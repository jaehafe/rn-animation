import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AnimatedComponents from './src/chapter2/AnimatedComponents';
import AnimatedValue from './src/chapter2/AnimatedValue';
import AnimatedTiming from './src/chapter2/AnimatedTiming';
import AnimatedProperty from './src/chapter2/AnimatedProperty';
import Carousel from './src/chapter2/catalin/Carousel';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {animationNavigation} from './src/constants/navigation';

export type AnimationStackParamList = {
  [animationNavigation.ANIMATION_1]: undefined;
  [animationNavigation.ANIMATION_2]: undefined;
  [animationNavigation.ANIMATION_3]: undefined;
  [animationNavigation.ANIMATION_4]: undefined;
};

const Stack = createStackNavigator<AnimationStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={animationNavigation.ANIMATION_1}
          component={AnimatedComponents}
          options={({navigation}) => {
            return {
              title: 'first',
            };
          }}
        />
        <Stack.Screen
          name={animationNavigation.ANIMATION_2}
          component={AnimatedValue}
          options={({navigation}) => {
            return {
              title: '2',
            };
          }}
        />
        <Stack.Screen
          name={animationNavigation.ANIMATION_3}
          component={AnimatedTiming}
          options={({navigation}) => {
            return {
              title: '3',
            };
          }}
        />
        <Stack.Screen
          name={animationNavigation.ANIMATION_4}
          component={AnimatedProperty}
          options={({navigation}) => {
            return {
              title: '4',
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

// <SafeAreaView>
//         {/* <Carousel /> */}
//         <AnimatedProperty />
//       </SafeAreaView>
