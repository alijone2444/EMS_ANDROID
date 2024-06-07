const homeScreenConstants = {
    textAboveSearchBar: ['Uncover', 'a', 'World', ' of', 'Events'],
    HomeScreenTitle: 'IST EMS',
    ScrollOneTitle: 'Recents',
    ScrollTwoTitle: 'Upcoming',
    ScrollThreeTitle: 'Popular',
    testDataForNotifications: [
        {
            senderImage: require('../resources/test-img1.jpg'),
            title: 'Notification 1',
            text: 'This is the first notification text.',
            time: '2 hours ago',
        },
        {
            senderImage: require('../resources/test-img3.jpg'),
            title: 'Notification 2',
            text: 'This is the second notification text.',
            time: '1 day ago',
        },
        // Add more test data as needed
    ],

    TestDataForEvents: [
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
            organizer: ' Cultural Fusion Events',
            imageUrl: require('../resources/test-img3.jpg'),
        },
        // Add more test data as needed
    ]
}
export default homeScreenConstants