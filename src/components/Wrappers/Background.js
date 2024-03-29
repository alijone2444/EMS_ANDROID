import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View } from 'react-native';

const Background = ({ children }) => {
    return (
        <ImageBackground source={require('../../resources/background.jpg')} style={styles.background}>
            <View style={styles.overlay}></View>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' depending on your image aspect ratio
    },
    overlay: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },

});

export default Background;
