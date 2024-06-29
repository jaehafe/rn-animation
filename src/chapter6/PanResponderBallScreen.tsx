import {
  Animated,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useRef} from 'react';

export default function PanResponderBallScreen() {
  const panAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: panAnim.x, dy: panAnim.y}], {
      useNativeDriver: false,
    }),
    onPanResponderEnd: (evt, gestureState) => {
      // Animated.decay: 빠르게 움직이다가 서서히 멈추는 것
      Animated.decay(panAnim, {
        velocity: {x: gestureState.vx / 10, y: gestureState.vy / 10},
        deceleration: 0.997,
        useNativeDriver: true,
      }).start();
    },
    onPanResponderRelease: (evt, gestureState) => {
      setTimeout(() => {
        panAnim.setValue({x: 0, y: 50});
        Animated.spring(panAnim, {
          toValue: {x: 0, y: 0},
          friction: 7,
          tension: 30,
          useNativeDriver: true,
        }).start();
      }, 2000);
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          bottom: 20,
          transform: [{translateX: panAnim.x}, {translateY: panAnim.y}],
        }}
      >
        <Text style={{fontSize: 100}}>🏀</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
});
