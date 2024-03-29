import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Background from '../../components/Wrappers/Background';
import HeaderWrapper from '../../components/Wrappers/HeaderWrapper';
import HorizontalScrollingCards from '../../components/HrScrolls/hrScroll';
import homeScreenConstants from '../../constants/homeScreenConstants';
import SearchBarComponent from '../../components/searchBar/searchbar';
const HomePage = ({ navigation }) => {
    const handleButtonClick = () => {
        // Handle button click action, such as navigating to another screen
        navigation.navigate('OtherScreen');
    };
    const eventData = [
        {
            name: 'Event 1',
            location: 'Location 1',
            organizer: 'Music Magic Productions',
            imageUrl: require('../../resources/test-img1.jpg'),
        },
        {
            name: 'Event 2',
            location: 'Location 2',
            organizer: 'Sportsmania Events Management',
            imageUrl: require('../../resources/test-img2.jpg'),
        },
        {
            name: 'Event 3',
            location: 'Location 3',
            organizer: ' Cultural Fusion Events',
            imageUrl: require('../../resources/test-img3.jpg'),
        },
        // Add more test data as needed
    ];
    return (
        <Background>
            <HeaderWrapper title={homeScreenConstants.HomeScreenTitle} addPadding={false} navigation={navigation}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <SearchBarComponent />
                    <View style={styles.container}>
                        <HorizontalScrollingCards heading={homeScreenConstants.ScrollOneTitle} data={eventData} />
                        <HorizontalScrollingCards heading={homeScreenConstants.ScrollTwoTitle} data={eventData} />
                        <HorizontalScrollingCards heading={homeScreenConstants.ScrollThreeTitle} data={eventData} />
                    </View>
                </ScrollView>
            </HeaderWrapper>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20
    },
    contentContainer: {
        flexGrow: 1, // Make content container grow to fill available space
        paddingBottom: 60, // Adjust paddingBottom to accommodate bottom header height
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomePage;
