import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

// Easing ease / back / bounce / elastic / circle
export default function AnimatedTiming() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  const handleButtonPress = () => {
    translateXAnim.setValue(-100);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      delay: 0,
      // easing: Easing.inOut(Easing.ease),
      easing: Easing.out(Easing.circle),
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
