import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Setting from './screens/Setting';

const DarkModeSwitchScreen = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Setting />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default DarkModeSwitchScreen;
