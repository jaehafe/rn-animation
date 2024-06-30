import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

const {width} = Dimensions.get('window');

export default function PanResponderBannerSlider() {
  const [focus, setFocus] = useState(0);
  const bannerAnimation = useRef(new Animated.Value(0)).current;
  const pendingRef = useRef(true);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const toRight = gestureState.dx < -80;
      const toLeft = gestureState.dx > 80;

      if (toRight && pendingRef.current && focus < 4) {
        pendingRef.current = false;
        // focus가 5일때 오른쪽으로 넘어가면 focus를 0으로 바꿔주고, bannerAnimation을 0으로 바꿔준다.
        setFocus(focus === 5 ? 0 : focus + 1);

        // if (focus === 4) setFocus(focus + 1);
        Animated.timing(bannerAnimation, {
          toValue: -(focus + 1) * width,
          duration: 300,
          useNativeDriver: true,
        }).start(({finished}) => {
          if (finished) {
            pendingRef.current = true;
          }
        });
      }

      if (toLeft && pendingRef.current && focus > 0) {
        pendingRef.current = false;
        setFocus(focus === -1 ? 4 : focus - 1);

        Animated.timing(bannerAnimation, {
          toValue: -(focus - 1) * width,
          duration: 300,
          useNativeDriver: true,
        }).start(({finished}) => {
          if (finished) {
            pendingRef.current = true;
          }
        });
      }
      // bannerAnimation.setValue(gestureState.dx);
    },
  });

  const handleButtonPress = (index: number) => {
    setFocus(index);

    Animated.timing(bannerAnimation, {
      toValue: -index * width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.rowDirection,
          {transform: [{translateX: bannerAnimation}]},
        ]}
      >
        {[...Array(5)].map((value, index) => {
          return (
            <View style={styles.bannerWrapper} key={index}>
              <Text style={styles.bannerText}>{index}</Text>
            </View>
          );
        })}
      </Animated.View>

      {/* dot */}
      <View style={styles.dotContainer}>
        <View style={styles.dotWrapper}>
          {[...Array(5)].map((value, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => handleButtonPress(index)}
                key={index}
              >
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        focus === index ? '#ffa100' : '#ffa10050',
                    },
                  ]}
                />
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
  },
  bannerWrapper: {
    width: width,
    height: width,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 50,
    color: 'white',
  },
  dotContainer: {
    height: width,
    justifyContent: 'flex-end',
    marginTop: 60,
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  dot: {
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
