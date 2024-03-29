import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from FontAwesome
import Background from '../../components/Wrappers/Background';
// Assuming you've already installed FontAwesome icons package

const AccountCreatedSucessful = ({ navigation }) => {
    const handleContinue = () => {
        // Navigate to the next screen or perform any action on continue
    };

    return (
        <Background>
            <View style={styles.container}>

                <View style={styles.circle}>
                    <Text >
                        <Icon name="check" size={50} color="purple" /> {/* Checkmark icon */}
                    </Text>
                </View>
                <Text style={styles.congratsText}>Congratulations {"\uD83C\uDF89"}</Text><Text style={styles.message}>Account created successfully</Text>
                <TouchableOpacity
                    style={{
                        width: '80%',
                        borderRadius: 20,         // Set your desired border radius
                        paddingVertical: 10,      // Adjust padding as needed
                        alignItems: 'center',     // Center the content horizontally
                        marginTop: 10,            // Adjust margin as needed
                        borderColor: 'purple',
                        borderWidth: 1
                    }}
                    onPress={() => {
                        navigation.navigate('SignInScreen')
                    }}
                >
                    <Text style={{ color: 'purple' }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 2,  // Border width
        borderColor: 'purple',  // Border color
    },
    congratsText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'purple'
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    continueButton: {
        backgroundColor: 'blue', // Change the button color as needed
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    continueButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AccountCreatedSucessful;
