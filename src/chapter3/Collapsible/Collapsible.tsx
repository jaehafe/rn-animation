import React from 'react';
import {SafeAreaView} from 'react-native';

import {collapseData} from './data';
import Item from './Item';

export default function Collapsible() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {collapseData.map((value, index) => {
        return <Item value={value} index={index} />;
      })}
    </SafeAreaView>
  );
}
