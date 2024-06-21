import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {animationNavigation} from '../constants/navigation';
import {NavigationProp} from '@react-navigation/native';
import {AnimationStackParamList} from '../../App';

// type FeedDetailScreenProps = CompositeScreenProps<
//   StackScreenProps<FeedStackParamList, typeof feedNavigation.FEED_DETAIL>,
//   DrawerScreenProps<MainDrawerParamList>
// >;

type MainScreenProps = {
  navigation: NavigationProp<AnimationStackParamList>;
};

export default function MainScreen({navigation}: MainScreenProps) {
  const data = [
    {key: animationNavigation.ANIMATION_1, title: 'First'},
    {key: animationNavigation.ANIMATION_2, title: 'Second'},
    {key: animationNavigation.ANIMATION_3, title: 'Third'},
    {key: animationNavigation.ANIMATION_4, title: 'Fourth'},
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
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
