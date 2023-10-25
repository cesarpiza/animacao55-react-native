import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export default function LogAndCreateAccount() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>
                    Log in
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text}>
                    Create account
                </Text>
            </TouchableOpacity>
        </View>
    );
}