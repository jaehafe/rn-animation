import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

// interpolate
export default function AnimatedProperty() {
  const heightAnim = useRef(new Animated.Value(100)).current;

  const handleButtonPress = () => {
    Animated.timing(heightAnim, {
      toValue: 200,
      // duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Button title="커져라 ㅋ" onPress={handleButtonPress} />
      <Animated.View
        style={{
          width: 100,
          height: heightAnim,
          backgroundColor: heightAnim.interpolate({
            inputRange: [100, 180, 200],
            outputRange: ['#ffa100', 'red', '#aff100'],
          }),
          transform: [
            {
              rotate: heightAnim.interpolate({
                inputRange: [100, 200],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
