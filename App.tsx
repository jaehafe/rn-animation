import {StyleSheet} from 'react-native';
import React from 'react';

import AnimatedComponents from './src/chapter2/AnimatedComponents';
import AnimatedValue from './src/chapter2/AnimatedValue';
import AnimatedTiming from './src/chapter2/AnimatedTiming';
import AnimatedProperty from './src/chapter2/AnimatedProperty';
import Carousel from './src/chapter2/catalin/Carousel';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {animationNavigation} from './src/constants/navigation';
import MainScreen from './src/screens/MainScreen';
import {SkiaGradient} from './src/components/SkiaGradient/SkiaGradient';
import Dropdown from './src/components/Dropdown/Dropdown';
import DarkModeSwitchScreen from './src/DarkModeSwitch/DarkModeSwitchScreen';
import SharedElementNavigator from './src/Shared-Element/src/navigator/SharedElementNavigator';
import SnackBar from './src/chapter3/SnackBar';
import GestureHandler from './src/GestureHandler';
import FloatingActionButtonScreen from './src/FloatingActionButton';
import Collapsible from './src/chapter3/Collapsible/Collapsible';
import CircularProgressBarScreen from './src/CircularProgress';
import SKiaComponent from './src/skia';
import ModalComponent from './src/Modal';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export type AnimationStackParamList = {
  [animationNavigation.MAIN_SCREEN]: undefined;
  [animationNavigation.ANIMATION_1]: undefined;
  [animationNavigation.ANIMATION_2]: undefined;
  [animationNavigation.ANIMATION_3]: undefined;
  [animationNavigation.ANIMATION_4]: undefined;
  [animationNavigation.CAROUSEL]: undefined;
  [animationNavigation.SKIA_GRADIENT]: undefined;
  [animationNavigation.DROPDOWN]: undefined;
  [animationNavigation.DROPDOWN]: undefined;
  [animationNavigation.DARK_MODE_SWITCH_SCREEN]: undefined;
  [animationNavigation.SHARED_ELEMENT]: undefined;

  // chapter3
  [animationNavigation.SNACK_BAR]: undefined;
  [animationNavigation.COLLAPSIBLE]: undefined;
  // gesture handler
  [animationNavigation.GESTURE_HANDLER]: undefined;
  [animationNavigation.FLOATING_ACTION_BUTTON]: undefined;
  [animationNavigation.CIRCULAR_PROGRESS]: undefined;
  [animationNavigation.SKIA]: undefined;
  [animationNavigation.MODAL]: undefined;
};

const Stack = createStackNavigator<AnimationStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main_screen"
              component={MainScreen}
              options={{title: 'Main Screen'}}
            />

            <Stack.Screen
              name={animationNavigation.ANIMATION_1}
              component={AnimatedComponents}
              options={({navigation}) => {
                return {
                  title: 'first',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.ANIMATION_2}
              component={AnimatedValue}
              options={({navigation}) => {
                return {
                  title: '2',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.ANIMATION_3}
              component={AnimatedTiming}
              options={({navigation}) => {
                return {
                  title: '3',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.ANIMATION_4}
              component={AnimatedProperty}
              options={({navigation}) => {
                return {
                  title: '4',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.CAROUSEL}
              component={Carousel}
              options={({navigation}) => {
                return {
                  title: 'Carousel',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.SKIA_GRADIENT}
              component={SkiaGradient}
              options={({navigation}) => {
                return {
                  title: 'Skia Gradient',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.DROPDOWN}
              component={Dropdown}
              options={({navigation}) => {
                return {
                  title: 'Dropdown',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.DARK_MODE_SWITCH_SCREEN}
              component={DarkModeSwitchScreen}
              options={({navigation}) => {
                return {
                  title: 'Dark Mode Switch Screen',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.SHARED_ELEMENT}
              component={SharedElementNavigator}
              options={({navigation}) => {
                return {
                  title: 'Shared Element',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.SNACK_BAR}
              component={SnackBar}
              options={({navigation}) => {
                return {
                  title: 'SnackBar',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.GESTURE_HANDLER}
              component={GestureHandler}
              options={({navigation}) => {
                return {
                  title: 'Gesture Handler',
                  headerShown: false,
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.FLOATING_ACTION_BUTTON}
              component={FloatingActionButtonScreen}
              options={({navigation}) => {
                return {
                  title: 'Floating Action Button',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.COLLAPSIBLE}
              component={Collapsible}
              options={({navigation}) => {
                return {
                  title: 'Collapsible',
                };
              }}
            />
            <Stack.Screen
              name={animationNavigation.CIRCULAR_PROGRESS}
              component={CircularProgressBarScreen}
              options={({navigation}) => {
                return {
                  title: 'Circular Progress',
                  headerShown: false,
                };
              }}
            />

            <Stack.Screen
              name={animationNavigation.SKIA}
              component={SKiaComponent}
              options={({navigation}) => {
                return {
                  title: 'Skia',
                  headerShown: false,
                };
              }}
            />

            <Stack.Screen
              name={animationNavigation.MODAL}
              component={ModalComponent}
              options={({navigation}) => {
                return {
                  title: 'Modal',
                  headerShown: false,
                  presentation: 'modal',
                };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
