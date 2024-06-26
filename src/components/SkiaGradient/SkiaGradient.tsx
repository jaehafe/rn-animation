import {
  TouchableOpacity,
  StyleSheet,
  View,
  useWindowDimensions,
  StatusBar,
  Text,
} from 'react-native';
import {Canvas, LinearGradient, Rect, vec} from '@shopify/react-native-skia';
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {getRandomColor} from './utils';

const SkiaGradient = () => {
  const {width, height} = useWindowDimensions();

  const leftColor = useSharedValue('red');
  const rightColor = useSharedValue('blue');

  const colors = useDerivedValue(() => {
    return [leftColor.value, rightColor.value];
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Canvas style={{flex: 1}}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={colors}
          />
        </Rect>
      </Canvas>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          leftColor.value = withTiming(getRandomColor());
          rightColor.value = withTiming(getRandomColor());
        }}>
        {/* <FontAwesome name="random" size={24} color="white" /> */}
        <Text>Change</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 52,
    right: 32,
    height: 64,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: '#111',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {SkiaGradient};
