import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Animated,
  Easing,
  PanResponder,
} from 'react-native';
import React, {useRef, useState} from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

export default function PanResponderModal() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dy > 100) {
        hideModal();
      }
    },
  });

  const showModal = () => {
    setShow(true);
    Animated.timing(interpolateAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(interpolateAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setShow(false);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 100}}>
        <Button title="show modal!" onPress={showModal} />
      </View>
      <>
        {/* menu background */}
        {show && (
          <TouchableWithoutFeedback onPress={hideModal}>
            <Animated.View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#00000090',
                opacity: interpolateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}
            />
          </TouchableWithoutFeedback>
        )}

        {/* menu contents */}
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            position: 'absolute',
            bottom: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-500, 0],
            }),
            backgroundColor: 'white',
            width: '100%',
            padding: 20,
            paddingBottom: 20,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <ListItem onPress={hideModal} icon="pushpino" title="저장하기" />
          <ListItem onPress={hideModal} icon="hearto" title="좋아요" />
          <ListItem onPress={hideModal} icon="delete" title="삭제하기" />
          <ListItem onPress={hideModal} color="#999" icon="back" title="닫기" />
        </Animated.View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface ListItemProps {
  color?: string;
  icon: string;
  title: string;
  onPress: () => void;
}

function ListItem({color = '#333', icon, title, onPress}: ListItemProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#f2f2f2',
          borderBottomWidth: 1,
          height: 60,
        }}
      >
        <Icon name={icon} size={20} color={color} />
        <Text style={{color, fontSize: 15, marginLeft: 20}}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
