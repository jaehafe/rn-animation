import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

export default function AnimatedComponents() {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const handleButtonPress = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      useNativeDriver: true, // useNativeDriver 가 필요한 이유: https://reactnative.dev/docs/animated#using-the-native-driver
      // useNativeDriver 가 true 일 때, JS 스레드가 아닌 네이티브 스레드에서 애니메이션을 처리하기 때문에 성능이 좋아진다
    }).start();
  };

  return (
    <>
      <Button title="사라져라" onPress={handleButtonPress} />

      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        !!!
      </Animated.Text>
    </>
  );
}

const styles = StyleSheet.create({});
