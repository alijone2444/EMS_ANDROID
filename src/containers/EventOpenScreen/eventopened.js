import { View, StyleSheet } from "react-native"
import Background from "../../components/Wrappers/Background"
import Crousel from "../../components/crousel/crousel"
import { useRoute } from "@react-navigation/native"
import { ScrollView, Text } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon
import { Image } from "react-native-elements"
import formatDateString from "../../components/TimeFormater/formatTime"
import LottieAnimation from "../../components/lottie/lottie"
import timer from '../../resources/lottie/Timesup.json'
import timesup from '../../resources/lottie/clock.json'
const OpenedEvent = ({ navigation }) => {
    const route = useRoute()
    const data = route.params.data
    return (
        <Background>
            <ScrollView>
                <View style={styles.container}>
                    <Crousel data={data} />
                    <Text style={styles.text}>{data.eventName}</Text>
                    <View style={styles.locationContainer}>
                        <Icon name="angle-double-right" size={16} color="gray" style={styles.locationIcon} />
                        <Text style={styles.text2}>{data.subheader}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={16} color="gray" style={styles.locationIcon} />
                        <Text style={styles.location}>{data.location}</Text>
                    </View>

                    <Text style={styles.text}>Hosted by</Text>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.organizerContainer}>
                            <Image source={require('../../resources/img-not-found.jpg')} style={styles.organizerImage} />
                            <Text style={{ color: 'white' }}>{data.organizer}</Text>
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>About The Event</Text>
                            <Text style={{ marginTop: '2%' }}>{data.description}</Text>
                        </View>
                    </View>

                    <Text style={styles.text}>Time & Date</Text>
                    <View style={{ paddingLeft: '5%' }}>
                        <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
                            <Icon name="clock-o" size={16} color="gray" style={styles.locationIcon} />
                            <Text style={{ color: 'white' }}>Event Starting Time : </Text>
                            <Text style={{ fontSize: 15 }}>{formatDateString(data.startDate)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
                            <Icon name="clock-o" size={16} color="gray" style={styles.locationIcon} />
                            <Text style={{ color: 'white' }}>Event Ending Time : </Text>
                            <Text style={{ fontSize: 15 }}>{formatDateString(data.endDate)}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Icon name="clock-o" size={16} color="gray" style={styles.locationIcon} />
                            <Text style={{ color: 'white' }}>Ticket Deadline Time : </Text>
                            <Text style={{ fontSize: 15 }}>{formatDateString(data.registrationDeadline)}</Text>
                        </View>
                    </View>
                    <View style={styles.Lottiecontainer}>
                        <LottieAnimation source={data.registrationOpen ? timesup : timer} width={100} height={100} loop={true} speed={timer ? 0.01 : 1} />
                        <Text style={{ color: data.registrationOpen ? 'white' : 'red', marginTop: '5%' }}>registration :{data.registrationOpen ? 'Open' : 'closed'}</Text>

                    </View>

                </View>
            </ScrollView>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    Lottiecontainer: {
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        marginTop: 20,
        paddingLeft: '5%',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text2: {
        fontSize: 15,
    },
    locationContainer: {
        marginTop: 10,
        fontSize: 15,
        flexDirection: 'row',
        paddingLeft: '5%',
        marginBottom: 10,
    },
    locationIcon: {
        paddingRight: '2%'
    },
    organizerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    organizerImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginRight: '3%'
    },
    descriptionContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '5%'
    },
});

export default OpenedEvent;
