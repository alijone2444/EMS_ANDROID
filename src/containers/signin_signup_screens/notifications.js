import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Background from '../../components/Wrappers/Background';

const Notification = ({ route, navigation }) => {
    const { notificationData } = route.params;

    return (
        <Background>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 10, marginTop: 50 }}>
                {notificationData.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => { console.log(item) }}
                    >
                        <View style={styles.container}>
                            <Image source={item.senderImage} style={styles.image} />
                            <View style={styles.notificationInfo}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    notificationInfo: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
    },
    time: {
        color: '#888',
    },
});

export default Notification;
