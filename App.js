import React, { useRef } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  FlatList,
  Animated,
} from 'react-native';
import Item from './components/item/index';
import Indicator from './components/indicator/index';
import Box from './components/box/index';
import Background from './components/background/index';
import LogAndCreateAccount from './components/logAndCreateAccount/index';
import { bgs, DATA } from './styles'

export default function App() {

  const scrollX = useRef(new Animated.Value(0)).current
  const flatListRef = useRef(null);

  const handleScrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Background scrollX={scrollX} />
      <Box scrollX={scrollX} />
      <Animated.FlatList
        ref={flatListRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <Item {...item} scrollX={scrollX} index={index} />
          )
        }}
      />
      <LogAndCreateAccount />
      <Indicator scrollX={scrollX} handleScrollToIndex={handleScrollToIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});