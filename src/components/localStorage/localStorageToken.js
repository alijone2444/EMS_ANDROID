import AsyncStorage from '@react-native-async-storage/async-storage';
// To store the token
const storeToken = async (key, token) => {
    try {
        await AsyncStorage.setItem(key, token);
    } catch (error) {
        console.error('Error storing token:', error);
    }
};

// To retrieve the token
const getToken = async (key) => {
    try {
        const token = await AsyncStorage.getItem(key);
        return token;
    } catch (error) {
        console.error('Error getting token:', error);
        return null;
    }
};

// To remove the token
const removeToken = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing token:', error);
    }
};

export { storeToken, getToken, removeToken };
