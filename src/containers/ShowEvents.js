import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Background from '../components/Wrappers/Background';
import VerticalScrollingCards from '../components/VrScrolls/VrScroll';
import MarginWrapper from '../components/Wrappers/marginWrapper';
import { useSelector, useDispatch } from 'react-redux';
import createAuthenticatedRequest from '../components/RequestWithHeader/requestWithHeader';
import GlobalConstant from '../constants/GlobalConstants';
import { setEventsDataAll } from '../ReduxStore/actions/eventsDataActionUser';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const ShowEvents = ({ navigation, route }) => {
    const [selectedButton, setSelectedButton] = useState('AllEvents');
    const allEvents = useSelector(state => state.userAllEvents);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (!isPageDataAvailable(currentPage)) {
            fetchData(currentPage);
        }
    }, [currentPage]);

    const isPageDataAvailable = (page) => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return allEvents.slice(startIndex, endIndex).length > 0;
    };
    const fetchData = async () => {
        try {
            const requestInstance = await createAuthenticatedRequest();
            const response = await requestInstance.get(`${GlobalConstant.baseUrl}get-events`, {
                params: {
                    amount: 'All',
                    page: currentPage,
                    pageSize: pageSize,
                },
            });
            if (response && response.data) {
                const newEventsData = currentPage === 1 ? response.data.events : [...allEvents, ...response.data.events];
                dispatch(setEventsDataAll(newEventsData));
                setTotalPages(response.data.totalPages);
            }
        } catch (error) {
            console.log("Error fetching events:", error);
        }
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const currentPageData = allEvents.slice(startIndex, Math.min(startIndex + pageSize, allEvents.length));

    return (
        <Background>
            <MarginWrapper>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={[styles.button, selectedButton === 'AllEvents' && styles.selectedButton]}
                        onPress={() => handleButtonPress('AllEvents')}
                    >
                        <Text style={styles.buttonText}>All Events</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, selectedButton === 'Upcoming' && styles.selectedButton]}
                        onPress={() => handleButtonPress('Upcoming')}
                    >
                        <Text style={styles.buttonText}>Upcoming</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <VerticalScrollingCards data={currentPageData} marginTop={20} />
                    <View style={styles.paginationContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <Icon name="arrow-left" size={20} color={currentPage === 1 ? '#ccc' : 'purple'} />
                        </TouchableOpacity>
                        <Text style={styles.paginationInfo}>
                            Page {currentPage} of {totalPages}
                        </Text>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <Icon name="arrow-right" size={20} color={currentPage === totalPages ? '#ccc' : 'purple'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </MarginWrapper>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'purple',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    selectedButton: {
        backgroundColor: 'purple',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    paginationButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    paginationInfo: {
        fontSize: 16,
    },
});

export default ShowEvents;
