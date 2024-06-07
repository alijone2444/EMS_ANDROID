// Import necessary libraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

// Create a Lottie animation component
const LottieAnimation = ({ source, width, height, speed, loop, OnFinishCallback }) => {
    return (
        <View style={styles.container}>
            <LottieView
                source={source}
                autoPlay
                loop={loop}
                width={width}
                height={height}
                speed={speed}
                onAnimationFinish={OnFinishCallback}
            />
        </View>
    );
};

// Define styles for the component
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LottieAnimation;
