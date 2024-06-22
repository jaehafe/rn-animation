import {
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
  ];

  const renderItem = ({
    item,
  }: {
    item: {key: keyof AnimationStackParamList; title: string};
  }) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate(item.key)}>
      <Text style={styles.boxText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  boxText: {
    fontSize: 16,
    color: 'white',
  },
});
