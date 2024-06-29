import {Platform, StyleSheet, Text, UIManager, View} from 'react-native';
import React from 'react';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function LayoutAnimationScreen() {
  return (
    <View>
      <Text>LayoutAnimationScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
