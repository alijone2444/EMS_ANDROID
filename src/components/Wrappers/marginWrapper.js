import React from 'react';
import { View, StyleSheet } from 'react-native';

const MarginWrapper = ({ children }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: 70,
        marginLeft: 20,
        marginRight: 20,
    },

    content: {
        flex: 1,
    },
});

export default MarginWrapper;
