import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const VerticalScrollingCards = ({ heading, data, marginTop, alreadyLiked }) => {
    const [likedItems, setLikedItems] = useState([]);

    const handleCardPress = (item) => {
        // Handle onPress event for the card
    };

    const handleHeartPress = (index) => {
        const newLikedItems = [...likedItems];
        if (newLikedItems.includes(index)) {
            newLikedItems.splice(newLikedItems.indexOf(index), 1);
        } else {
            newLikedItems.push(index);
        }
        setLikedItems(newLikedItems);
    };

    const renderSkeletons = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            {Array.from({ length: 5 }).map((_, index) => (
                <View key={index} style={styles.card}>
                    <SkeletonPlaceholder
                        backgroundColor="#e0e0e0"
                        highlightColor="#dda0dd"
                        speed={1500}>
                        <SkeletonPlaceholder.Item width="100%" height={150} borderRadius={10} />
                        <SkeletonPlaceholder.Item width="100%" height={20} borderRadius={4} marginTop={10} />
                        <SkeletonPlaceholder.Item width="100%" height={20} borderRadius={4} marginTop={6} />
                    </SkeletonPlaceholder>
                </View>
            ))}
        </ScrollView>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: marginTop ? marginTop : 0 }}>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCardPress(item)}>
                        <View style={styles.card}>
                            <TouchableOpacity
                                style={styles.heartButton}
                                onPress={() => handleHeartPress(index)}
                            >
                                <Icon
                                    name="heart"
                                    size={22}
                                    color={alreadyLiked ? (likedItems.includes(index) ? 'white' : 'purple') : (likedItems.includes(index) ? 'purple' : 'white')}
                                />
                            </TouchableOpacity>
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
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(54, 54, 54, 0.7)',
        padding: 10,
        elevation: 3,
        position: 'relative',
    },
    heartButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    image: {
        width: '100%',
        height: 150,
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

export default VerticalScrollingCards;
