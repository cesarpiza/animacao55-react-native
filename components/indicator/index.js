import React from 'react';
import {
    Animated,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';
import { DATA } from '../../styles'
import { styles } from './styles';

const { width } = Dimensions.get('window');

export default function Indicator(props) {

    const {
        scrollX,
        handleScrollToIndex
    } = props;

    return (
        <View style={styles.container}>
            {DATA.map((_, index) => {

                const inputRange = [
                    width * (index - 1),
                    width * index,
                    width * (index + 1),
                ]

                const extrapolate = 'clamp'

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate,
                })

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [1, 1.3, 1],
                    extrapolate,
                })

                return (
                    <TouchableOpacity
                        key={`indicator-${index}`}
                        onPress={() => {
                            handleScrollToIndex(index)
                        }}
                    >
                        <Animated.View

                            style={[styles.indicator, {
                                opacity,
                                transform: [
                                    {
                                        scale,
                                    }
                                ]
                            }]}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}