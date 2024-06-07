import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HorizontalScrollingCards = ({ navigation, heading, data }) => {

    const handleCardPress = (item) => {
        navigation.navigate('on-open-event', { data: item })
    };

    const renderSkeletons = () => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 5 }).map((_, index) => (
                <View key={index} style={[styles.card, { width: heading === 'Popular' ? 320 : 230 }]}>
                    <SkeletonPlaceholder
                        backgroundColor="#e0e0e0"
                        highlightColor="#dda0dd"
                        speed={1500}>
                        <SkeletonPlaceholder.Item width="100%" height={120} borderRadius={10} />
                        <SkeletonPlaceholder.Item width="60%" height={20} borderRadius={4} marginTop={10} />
                        <SkeletonPlaceholder.Item width="40%" height={20} borderRadius={4} marginTop={6} />
                    </SkeletonPlaceholder>
                </View>
            ))}
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.length !== 0 ? (
                    data.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleCardPress(item)}>
                            <View style={[styles.card, { width: heading === 'Popular' ? 320 : 230 }]}>
                                <Image
                                    source={item.mainImageData ? { uri: `data:image/jpeg;base64,${item.mainImageData}` } : require('../../resources/img-not-found.jpg')}
                                    style={styles.image}
                                />
                                <Text style={styles.name}>{item.eventName}</Text>
                                <Text style={[styles.location, styles.organizerName]}>{item.organizer}</Text>
                                <View style={styles.locationContainer}>
                                    <Icon name="map-marker" size={16} color="gray" style={styles.locationIcon} />
                                    <Text style={styles.location}>{item.location}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    renderSkeletons()
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        marginRight: 10,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'rgba(54, 54, 54, 0.7)',
        padding: 10,
        elevation: 3,
    },
    image: {
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 5,
    },
    organizerName: {
        color: 'purple',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: '3%'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        marginRight: 5,
    },
    location: {
        fontSize: 14,
        color: 'gray',
    },
});

export default HorizontalScrollingCards;
