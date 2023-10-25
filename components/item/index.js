import React from 'react';
import {
    Animated,
    Dimensions,
    Image,
    Text,
    View
} from 'react-native';
import { DATA } from '../../styles';
import { styles } from './styles';

const { width } = Dimensions.get('window');

export default function item(props) {

    const {
        image,
        title,
        description,
        scrollX,
        index,
    } = props;

    const inputRange = [
        width * (index - 1),
        width * (index),
        width * (index + 1),
    ]

    const imageTranslateX = scrollX.interpolate({
        inputRange,
        outputRange: [width / 4, 0, -width / 4],
    })

    const detailsTranslateX = scrollX.interpolate({
        inputRange,
        outputRange: [width * 2, 0, -width * 2],
    })

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Animated.Image
                    source={{ uri: image }}
                    style={[styles.image, {
                        transform: [
                            {
                                translateX: imageTranslateX,
                            }
                        ]
                    }]}
                />
            </View>
            <View style={styles.detailsContainer}>
                <Animated.Text style={[styles.title, {
                    transform: [
                        {
                            translateX: detailsTranslateX,
                        }
                    ]
                }]}>
                    {title}
                </Animated.Text>
                <Animated.Text style={[styles.description, {
                    transform: [
                        {
                            translateX: detailsTranslateX,
                        }
                    ]
                }]}>
                    {description}
                </Animated.Text>
            </View>
        </View>
    );
}