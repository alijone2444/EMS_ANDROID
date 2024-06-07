import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { SearchBar } from 'react-native-elements'; // Import SearchBar from react-native-elements
import homeScreenConstants from '../../constants/homeScreenConstants';
import { removeToken } from '../localStorage/localStorageToken';
import logo from '../../resources/logoEdit2.png'
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../ReduxStore/actions/isAuthenticated';
import Logout from '../alertComponent/logout';

const Header = ({ title, navigation }) => {
    const dispatch = useDispatch()
    const [showLogout, setshowLogout] = useState(false)
    return (
        <View style={styles.header}>
            {/* Left side: Profile button */}
            <TouchableOpacity style={styles.leftButton} onPress={() => {
                setshowLogout(true)
            }}>
                <Icon name="sign-out" size={30} color="white" style={{ transform: [{ scaleX: -1 }], }} />
            </TouchableOpacity>

            {/* Center: Title */}
            <Image source={logo} style={styles.logo} />

            {/* Right side: Notification button */}
            <TouchableOpacity
                style={styles.rightButton}
                onPress={() => { navigation.navigate('Notifications', { notificationData: homeScreenConstants.testDataForNotifications }) }}>
                <Icon name="bell" size={18} color="white" />
            </TouchableOpacity>

            {showLogout && <Logout callback={() => { setshowLogout(false) }} navigation={navigation} />}
            {/* Search bar */}
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    }, logo: {
        width: 120, // Adjust as needed
        height: 56, // Adjust as needed
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
    },
    leftButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    rightButton: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 75,
        padding: 3,
        marginRight: 5
    },
});

export default Header;
