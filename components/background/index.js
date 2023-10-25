import React from 'react';
import {
    Animated,
    Dimensions,
    View
} from 'react-native';
import { DATA, bgs } from '../../styles'
import { styles } from './styles';

const { width } = Dimensions.get('window');

export default function Background(props) {

    const { scrollX } = props;

    const inputRange = DATA.map((_, index) => index * width)
    const outputRange = bgs.map((item) => item)

    const backgroundColor = scrollX.interpolate({
        inputRange,
        outputRange,
    })

    return (
        <Animated.View style={[styles.container, {
            backgroundColor,
        }]} />
    );
}