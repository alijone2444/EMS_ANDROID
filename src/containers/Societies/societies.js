import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import Background from '../../components/Wrappers/Background';
import MarginWrapper from '../../components/Wrappers/marginWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { setSocietiesData } from '../../ReduxStore/actions/societyDataAction';
import createAuthenticatedRequest from '../../components/RequestWithHeader/requestWithHeader'; // Adjust import path as needed
import GlobalConstant from '../../constants/GlobalConstants';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const Societies = () => {
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const societiesData = useSelector(state => state.SocietiesData);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        try {
            setIsLoadingMore(true);
            const requestInstance = await createAuthenticatedRequest();
            const response = await requestInstance.get(`${GlobalConstant.baseUrl}get-societies?page=${page}`);
            const newSocietiesData = response.data.societies;
            if (newSocietiesData.length > 0) {
                // Only update state if new data is received
                dispatch(setSocietiesData([...societiesData, ...newSocietiesData]));
            }
            setIsLoadingMore(false);
        } catch (error) {
            console.error('Error fetching societies data:', error);
            setIsLoadingMore(false);
        }
    };

    const handleFollow = async (societyId) => {
        try {
            const requestInstance = await createAuthenticatedRequest();
            const response = await requestInstance.post(`${GlobalConstant.baseUrl}subscribe`, {
                userId: 'user_id_placeholder', // Replace with actual user ID
                societyId: societyId,
            });
            if (response.data.success) {
                Alert.alert('Success', 'You are now following this society.');
            } else {
                Alert.alert('Error', 'Failed to follow this society. Please try again later.');
            }
        } catch (error) {
            console.error('Error following society:', error);
            Alert.alert('Error', 'An error occurred while following this society. Please try again later.');
        }
    };

    const renderSkeletons = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            {Array.from({ length: 5 }).map((_, index) => (
                <View key={index} style={{ paddingHorizontal: '5%', marginBottom: '5%' }}>
                    <SkeletonPlaceholder
                        backgroundColor="#e0e0e0"
                        highlightColor="#dda0dd"
                        speed={1500}>
                        <SkeletonPlaceholder.Item width="100%" height={180} borderRadius={10} />
                        <SkeletonPlaceholder.Item width="100%" height={20} borderRadius={4} marginTop={10} />
                        <SkeletonPlaceholder.Item width="100%" height={20} borderRadius={4} marginTop={6} />
                    </SkeletonPlaceholder>
                </View>
            ))}
        </ScrollView>
    );

    return (
        <Background>
            <ScrollView style={{ marginTop: '15%' }}>
                {societiesData.map((society, index) => (

                    <TouchableOpacity key={index} style={styles.cardContainer}>
                        <Image source={{ uri: society.cover_photo }} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.societyName}>{society.name}</Text>
                            <Text style={styles.societyDescription}>{society.description}</Text>
                            <TouchableOpacity style={styles.followButton} onPress={() => handleFollow(society.id)}>
                                <Text style={styles.followButtonText}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                ))}
                {isLoadingMore ? (
                    renderSkeletons()) : (

                    <TouchableOpacity onPress={() => setPage(page + 1)}>
                        <Text style={styles.viewMore}>View More</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: 'rgba(54, 54, 54, 0.7)',
        borderRadius: 10,
        margin: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardContent: {
        padding: 10,
    },
    societyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    societyDescription: {
        fontSize: 16,
    },
    followButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    viewMore: {
        color: 'white', // Change color to your preference
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
});

export default Societies;
