import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon set
import { setHeaderOption } from '../../ReduxStore/actions/headerOptionAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const BottomHeader = ({ navigation, navigationOptions }) => {
    const [selectedButton, setSelectedButton] = useState('home'); // State to track selected button
    const dispatch = useDispatch();
    const headerOption = useSelector(state => state.headerOption);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
        if (buttonName === 'events') {
            navigation.navigate('My Events', { key: 'events' })
            dispatch(setHeaderOption('events'))
        }
        else if (buttonName === 'home') {
            navigation.navigate('home')
            dispatch(setHeaderOption('home'))
        }
        else if (buttonName === 'Chatbot') {
            dispatch(setHeaderOption('Chatbot'))
        }
        else {
            dispatch(setHeaderOption('societies'))
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="none">
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('home')}
            >
                <Text>
                    <Icon name="home" size={20} color={headerOption.option === 'home' ? 'purple' : 'white'} /> {/* Apply different color based on selectedButton */}
                </Text>
                <Text style={[styles.buttonText, headerOption.option === 'home' && styles.selectedButton]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('Chatbot')}
            >
                <Text>
                    <Icon name="heart" size={20} color={headerOption.option === 'Chatbot' ? 'purple' : 'white'} />
                </Text>
                <Text style={[styles.buttonText, headerOption.option === 'Chatbot' && styles.selectedButton]}>Chatbot</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('societies')}
            >
                <Text>
                    <Icon name="users" size={20} color={headerOption.option === 'societies' ? 'purple' : 'white'} />
                </Text>
                <Text style={[styles.buttonText, headerOption.option === 'societies' && styles.selectedButton]}>Societies</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('events')}
            >
                <Text>
                    <Icon name="calendar" size={20} color={headerOption.option === 'events' ? 'purple' : 'white'} />
                </Text>
                <Text style={[styles.buttonText, headerOption.option === 'events' && styles.selectedButton]}>Events</Text>
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
