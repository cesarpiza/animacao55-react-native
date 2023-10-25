import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.5;

export const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    imageContainer: {
        flex: 0.6,
        alignSelf: 'center',
        //backgroundColor: 'red',
        justifyContent: 'center',
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
    },
    detailsContainer: {
        paddingHorizontal: 20,
        flex: 0.4,
        //backgroundColor: 'blue',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    description: {
        fontSize: 18,
    }
});