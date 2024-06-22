import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropdownList from './DropdownList';

const options = [
  {label: 'Charts', iconName: 'barschart'},
  {label: 'Book', iconName: 'book'},
  {label: 'Calendar', iconName: 'calendar'},
  {label: 'Camera', iconName: 'camera'},
];

const header = {
  label: 'Header',
  iconName: 'ellipsis1',
};

export default function Dropdown() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <DropdownList header={header} options={options} />
      {/* <View>
        <Text>123</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
