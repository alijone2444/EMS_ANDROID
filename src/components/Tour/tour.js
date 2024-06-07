import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const slides = [
    {
        image: require('../../resources/tours1.jpg'),
        title: 'Welcome to our event management system!',
        subtitle: 'Discover and manage events effortlessly.',
    },
    {
        image: require('../../resources/tours2.jpg'),
        title: 'Explore events happening near you.',
        subtitle: 'Find exciting events in your area.',
    },
    {
        image: require('../../resources/tours3.jpg'),
        title: 'Join events, create your own, and much more!',
        subtitle: 'Participate in events or organize your own with ease.',
    },
];

const TourComponent = ({ navigation }) => {
    const onPressGetStarted = () => {
        navigation.navigate('Main');
    };

    return (
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            loop={false}
            dot={
                <View
                    style={{
                        backgroundColor: 'white',
                        width: 10,
                        height: 10,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                    }}
                />
            }
            activeDot={
                <View
                    style={{
                        backgroundColor: 'purple',
                        width: 25,
                        height: 10,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                    }}
                />
            }
        >
            {slides.map((slide, index) => (
                <View style={styles.slide} key={index}>
                    <ImageBackground source={slide.image} style={styles.backgroundImage}>
                        <View style={styles.overlay}>
                            <Text style={styles.title}>{slide.title}</Text>
                            <Text style={styles.subtitle}>{slide.subtitle}</Text>
                            <TouchableOpacity onPress={onPressGetStarted} style={styles.button}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5,
    },
    subtitle: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 20,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 50,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TourComponent;
