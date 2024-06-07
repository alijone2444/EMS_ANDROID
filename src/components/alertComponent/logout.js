import React, { useState } from 'react';
import { View } from 'react-native';
import Background from '../Wrappers/Background';
import NiceAlert from './alert';
import { useNavigation } from '@react-navigation/native';
import { setAuthenticated } from '../../ReduxStore/actions/isAuthenticated';
import { removeToken } from '../localStorage/localStorageToken';
import { useDispatch } from 'react-redux';
const Logout = ({ navigation, callback }) => {
    const [isAlertVisible, setAlertVisible] = useState(true); // Keep initial state as true
    const dispatch = useDispatch();

    const handleLogout = async (type) => {
        setAlertVisible(false); // Close the alert when navigating away
        if (type === 2) {
            await removeToken('authToken'); // Add await here to ensure token removal is complete
            dispatch(setAuthenticated(false));
            navigation.navigate('Auth', { screen: 'SigninSignoutOption' }); // Ensure this correctly navigates to SigninSignoutOption
            console.log('Logged out successfully');
        } else {
            callback()
        }
    };

    return (
        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
            <NiceAlert
                visible={isAlertVisible}
                title={'Logout'}
                description={'Are you sure you want to logout?'}
                onClose={handleLogout}
                sure={true}
            />
        </View>
    );
};

export default Logout;
