import React from 'react';
import {
    Animated,
    Dimensions,
    View
} from 'react-native';
import { styles } from './styles';

const { width, height } = Dimensions.get('window')

export default function Box(props) {

    const { scrollX } = props;

    const animatedValue = Animated.modulo(Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)), 1)

    const rotate = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['30deg', '0deg', '30deg'],
    })

    const translateX = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -height, 0],
    })

    return (
        <Animated.View style={[styles.box, {
            transform: [
                {
                    translateX,
                },
                {
                    rotate,
                }
            ]
        }]} />
    );
}