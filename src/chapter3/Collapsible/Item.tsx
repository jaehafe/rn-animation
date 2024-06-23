import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface ItemProps {
  value: {q: string; a: string};
  index: number;
}

export default function Item({value, index}: ItemProps) {
  const interpolateAnim = useSharedValue(0);

  const handlePress = () => {
    interpolateAnim.value = withTiming(interpolateAnim.value === 0 ? 1 : 0, {
      duration: 200,
    });
  };

  const isOpened = useDerivedValue(() => interpolateAnim.value === 1);

  const animatedIconStyle = useAnimatedStyle(() => {
    const rotate = interpolate(interpolateAnim.value, [0, 1], [0, 180]);
    return {
      transform: [{rotate: `${rotate}deg`}],
    };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    const height = interpolate(interpolateAnim.value, [0, 1], [0, 100]);
    return {
      height,
    };
  });

  return (
    <View key={index}>
      {/* 질문영역 */}
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{value.q}</Text>
          <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
            <Icon name="expand-more" size={24} color="yellow" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      {/* 답변영역 */}
      <Animated.View style={[styles.answerContainer, animatedContentStyle]}>
        <Text style={styles.answerText}>{value.a}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#4c5ced',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 16,
    flexShrink: 1,
  },
  iconContainer: {
    flexShrink: 1,
    marginLeft: 10,
  },
  answerContainer: {
    paddingHorizontal: 40,
    justifyContent: 'center',
    borderBottomColor: '#4c5ced',
    borderBottomWidth: 0.5,
    overflow: 'hidden',
  },
  answerText: {
    fontSize: 14,
  },
});
