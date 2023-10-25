import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    box: {
        position: 'absolute',
        left: width / 4 - width * 2 / 2,
        top: -width * 1.22,
        width: width * 2,
        height: width * 2,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
});