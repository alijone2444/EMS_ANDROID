import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Import View, Text, StyleSheet
import { SearchBar } from 'react-native-elements'; // Import SearchBar from react-native-elements
import homeScreenConstants from '../../constants/homeScreenConstants';

const SearchBarComponent = () => {
    return (
        <View style={{
            paddingVertical: 30,
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginBottom: 20
        }}>
            <View style={styles.textAboveSearchContainer}>
                {homeScreenConstants.textAboveSearchBar.map((text, index) => (
                    <Text key={index} style={index === Math.floor(homeScreenConstants.textAboveSearchBar.length / 2) ? styles.textAboveSearch2 : styles.textAboveSearch}>{text}</Text>
                ))}
            </View>
            <View style={styles.searchContainer}>
                <SearchBar
                    placeholder="Search"
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.searchInput}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    textAboveSearchContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textAboveSearch: {
        fontSize: 20,
        paddingHorizontal: 3
    },

    textAboveSearch2: {
        fontSize: 20,
        paddingHorizontal: 3,
        color: 'purple'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    searchText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
    },
    searchBar: {
        width: "100%",
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
});

export default SearchBarComponent;
