// HeaderWrapper.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Header/header.js';
import SearchBarComponent from '../searchBar/searchbar.js';
import BottomHeader from '../Header/headerBottom.js';
const HeaderWrapper = ({ title, children, addPadding, navigation }) => {
    return (
        <View style={styles.container}>
            <Header title={title} navigation={navigation} />
            <View style={[styles.content, { padding: addPadding ? 20 : 0 }]}>{children}</View>
            <BottomHeader />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});

export default HeaderWrapper;
