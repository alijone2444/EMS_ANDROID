import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon
import Background from '../../components/Wrappers/Background';
import MarginWrapper from '../../components/Wrappers/marginWrapper';
const Profile = () => {
    return (
        <Background>
            <MarginWrapper>
                <View style={styles.container}>
                    <View style={styles.profileContainer}>

                        <Image
                            source={require('../../resources/img-not-found.jpg')}
                            style={styles.profileImage}
                        />
                        <View style={styles.profileInfo}>
                            <Text style={styles.userName}>John Doe</Text>
                            <TouchableOpacity>
                                <Text style={styles.viewProfileLink}>View My Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.accountSettings}>
                        <Text style={styles.heading}>Account Settings</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text>
                                    <Icon name="user" size={20} color="white" />
                                </Text>
                                <Text style={styles.buttonText}>Profile Information</Text>
                                <Text>
                                    <Icon name="angle-right" size={20} color="white" />
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>

                                <Text><Icon name="bell" size={20} color="white" />
                                </Text>
                                <Text style={styles.buttonText}>Notifications</Text>
                                <Text><Icon name="angle-right" size={20} color="white" />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.additionalOptions}>
                        <Text style={styles.heading}>Additional Options</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text><Icon name="lock" size={20} color="white" /></Text>
                                <Text style={styles.buttonText}>Privacy Policy</Text>
                                <Text><Icon name="angle-right" size={20} color="white" /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text><Icon name="file-text-o" size={20} color="white" /></Text>
                                <Text style={styles.buttonText}>Terms of Service</Text>
                                <Text><Icon name="angle-right" size={20} color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </MarginWrapper>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewProfileLink: {
        color: 'blue',
    },
    accountSettings: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        marginLeft: 10,
        flex: 1,
        color: 'white'
    },
    additionalOptions: {},
});

export default Profile;
