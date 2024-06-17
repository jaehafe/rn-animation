import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

// setValue
// addListener
// removeListener
// stopAnimation
// resetAnimation
// setOffset
// flattenOffset
// extractOffset()

// x 값이 변화하는 animation
export default function AnimatedValue() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    return () => {
      translateXAnim.removeAllListeners();
    };
  }, []);

  const handleButtonPress = () => {
    translateXAnim.setValue(-100);
    translateXAnim.addListener(({value}) => console.log(value));

    setTimeout(() => {
      translateXAnim.stopAnimation();
    }, 500);
    // setTimeout(() => {
    //   translateXAnim.resetAnimation();
    // }, 500);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="움직여라 ㅋ" onPress={handleButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        123123123123
      </Animated.Text>
    </>
  );
}

const styles = StyleSheet.create({});
