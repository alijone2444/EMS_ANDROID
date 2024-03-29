import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon set

const BottomHeader = () => {
    const [selectedButton, setSelectedButton] = useState('home'); // State to track selected button

    // Function to handle button press and update selected button
    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="none">
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('home')}
            >
                <Text>
                    <Icon name="home" size={20} color={selectedButton === 'home' ? 'purple' : 'white'} /> {/* Apply different color based on selectedButton */}
                </Text>
                <Text style={[styles.buttonText, selectedButton === 'home' && styles.selectedButton]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('favourites')}
            >
                <Text>
                    <Icon name="heart" size={20} color={selectedButton === 'favourites' ? 'purple' : 'white'} />
                </Text>
                <Text style={[styles.buttonText, selectedButton === 'favourites' && styles.selectedButton]}>Favourites</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('societies')}
            >
                <Text>
                    <Icon name="users" size={20} color={selectedButton === 'societies' ? 'purple' : 'white'} />
                </Text>
                <Text style={[styles.buttonText, selectedButton === 'societies' && styles.selectedButton]}>Societies</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('events')}
            >
                <Text>
                    <Icon name="calendar" size={20} color={selectedButton === 'events' ? 'purple' : 'white'} />
                </Text>
                <Text style={[styles.buttonText, selectedButton === 'events' && styles.selectedButton]}>Events</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    button: {
        alignItems: 'center',
    },
    selectedButton: {
        color: 'purple', // Style for selected button
    },
    buttonText: {
        fontSize: 12,
        marginTop: 5,
        color: 'white', // Set the text color
    },
});

export default BottomHeader;
