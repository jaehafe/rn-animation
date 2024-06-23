import {
  Animated,
  Button,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SnackBar() {
  const translationYAnim = useRef(new Animated.Value(100)).current;

  const handlePressButton = () => {
    Animated.sequence([
      Animated.timing(translationYAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
      Animated.delay(1300),
      Animated.timing(translationYAnim, {
        toValue: 100,
        duration: 300,
        easing: Easing.in(Easing.circle),
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="문제가 발생" onPress={handlePressButton} />

      <Animated.View
        style={[
          styles.snackbarContainer,
          {
            transform: [{translateY: translationYAnim}],
          },
        ]}
      >
        <View style={styles.snackbarWrapper}>
          {/* <Text style={styles.whiteText}>Icon</Text> */}
          <Icon name="checkmark-circle" color={'white'} size={24} />
          <Text style={styles.message}>Message</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  snackbarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  snackbarWrapper: {
    backgroundColor: '#222',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    margin: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  message: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});
