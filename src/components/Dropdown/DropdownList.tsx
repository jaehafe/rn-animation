import {StyleSheet} from 'react-native';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {DropdownItemType, DropdownListItem} from './DropdownListItem';

type DropdownProps = {
  header: DropdownItemType;
  options: DropdownItemType[];
};

export default function DropdownList({header, options}: DropdownProps) {
  const dropdownItems = [header, ...options];
  const isExpanded = useSharedValue(false);

  return (
    <>
      {dropdownItems.map((item, index) => {
        return (
          <DropdownListItem
            key={index}
            index={index}
            {...item}
            isExpanded={isExpanded}
            dropdownItemsCount={dropdownItems.length}
          />
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({});
