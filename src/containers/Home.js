import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Background from '../components/Wrappers/Background';
import HeaderWrapper from '../components/Wrappers/HeaderWrapper';
import HorizontalScrollingCards from '../components/HrScrolls/hrScroll';
import homeScreenConstants from '../constants/homeScreenConstants';
import SearchBarComponent from '../components/searchBar/searchbar';
import { useSelector } from 'react-redux';
import { getToken } from '../components/localStorage/localStorageToken';
import EventDataProvider from '../components/dataFetchFunctions/fetchEvents';
import { useEffect } from 'react';
const HomePage = ({ navigation }) => {
    const RecentEvent = useSelector((state) => state.userRecentEvents);
    const upcomingEvent = useSelector((state) => state.userUpcomingEvents);

    const eventData = [
        {
            name: 'Event 1',
            location: 'Location 1',
            organizer: 'Music Magic Productions',
            imageUrl: require('../resources/test-img1.jpg'),
        },
        {
            name: 'Event 2',
            location: 'Location 2',
            organizer: 'Sportsmania Events Management',
            imageUrl: require('../resources/test-img2.jpg'),
        },
        {
            name: 'Event 3',
            location: 'Location 3',
            organizer: 'Cultural Fusion Events',
            imageUrl: require('../resources/test-img3.jpg'),
        },
        // Add more test data as needed
    ];
    return (
        <Background>
            <EventDataProvider />
            <HeaderWrapper showHeader={true} showBottomHeader={true} addPadding={false} navigation={navigation} callback={(option) => { handleCalback(option) }}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <SearchBarComponent />
                    <View style={styles.container}>
                        <HorizontalScrollingCards heading={homeScreenConstants.ScrollTwoTitle} data={upcomingEvent} navigation={navigation} />
                        <HorizontalScrollingCards heading={homeScreenConstants.ScrollThreeTitle} data={RecentEvent} navigation={navigation} />
                        <HorizontalScrollingCards heading={homeScreenConstants.ScrollOneTitle} data={RecentEvent} navigation={navigation} />
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
        flexGrow: 1,
        paddingBottom: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomePage;
