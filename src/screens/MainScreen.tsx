import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {animationNavigation} from '../constants/navigation';
import {AnimationStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

// type FeedDetailScreenProps = CompositeScreenProps<
//   StackScreenProps<FeedStackParamList, typeof feedNavigation.FEED_DETAIL>,
//   DrawerScreenProps<MainDrawerParamList>
// >;

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const boxMargin = 8;
const boxWidth = (screenWidth - boxMargin * (numColumns + 1)) / numColumns;

type MainScreenProps = {
  navigation: StackNavigationProp<AnimationStackParamList>;
};

export default function MainScreen({navigation}: MainScreenProps) {
  const data = [
    {key: animationNavigation.ANIMATION_1, title: 'First'},
    {key: animationNavigation.ANIMATION_2, title: 'Second'},
    {
      key: animationNavigation.SHARED_ELEMENT,
      title: 'Shared Element',
    },
    {key: animationNavigation.ANIMATION_3, title: 'Third'},
    {key: animationNavigation.ANIMATION_4, title: 'Fourth'},
    {key: animationNavigation.CAROUSEL, title: 'Carousel'},
    {key: animationNavigation.SKIA_GRADIENT, title: 'Skia Gradient'},
    {key: animationNavigation.DROPDOWN, title: 'Dropdown'},
    {
      key: animationNavigation.DARK_MODE_SWITCH_SCREEN,
      title: 'Dark Mode Switch Screen',
    },
    //chapter3
    {key: animationNavigation.SNACK_BAR, title: 'SnackBar'},
    {key: animationNavigation.COLLAPSIBLE, title: 'Collapsible'},
    // gesture handler
    {key: animationNavigation.GESTURE_HANDLER, title: 'Gesture Handler'},
    //floating action button
    {
      key: animationNavigation.FLOATING_ACTION_BUTTON,
      title: 'Floating Action Button',
    },
    {
      key: animationNavigation.CIRCULAR_PROGRESS,
      title: 'Circular Progress',
    },
    {
      key: animationNavigation.SKIA,
      title: 'Skia',
    },
    {
      key: animationNavigation.MODAL,
      title: 'Modal',
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {key: keyof AnimationStackParamList; title: string};
  }) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate(item.key)}
    >
      <Text style={styles.boxText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        // contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        numColumns={3}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: boxMargin,
  },
  box: {
    width: boxWidth,
    height: boxWidth,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: boxMargin / 2,
  },
  boxText: {
    fontSize: 16,
  },
});
