import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon

const HorizontalScrollingCards = ({ heading, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCardPress(item)}>
                        <View style={styles.card}>
                            <Image
                                source={item.imageUrl ? item.imageUrl : require('../../resources/img-not-found.jpg')}
                                style={styles.image}
                            />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={[styles.location, styles.organizerName]}>{item.organizer}</Text>
                            <View style={styles.locationContainer}>
                                <Icon name="map-marker" size={16} color="gray" style={styles.locationIcon} />
                                <Text style={styles.location}>{item.location}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const handleCardPress = (item) => {
    // Handle onPress event for the card
    console.log("Card pressed:", item);
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
        width: 230,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'rgba(54, 54, 54, 0.7)',
        padding: 10,
        elevation: 3,
    },
    image: {
        width: '100%',
        flex: 1,
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
