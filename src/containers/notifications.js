import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Background from '../components/Wrappers/Background';

const Notification = ({ route, navigation }) => {
    const { notificationData } = route.params;

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { }}>
            <View style={styles.container}>
                <Image source={item.senderImage} style={styles.image} />
                <View style={styles.notificationInfo}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <Background>
            <FlatList
                style={styles.flatlist}
                data={notificationData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </Background>
    );
};

const styles = StyleSheet.create({
    flatlist: {
        marginTop: 50,
    },
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



// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// // Import Background from '../components/Wrappers/Background'; // Background component is not used in the code snippet provided.

// const Notification = ({ route, navigation }) => {
//     const { notificationData } = route.params;
//     const data = [
//         { name: 'Hamburger', pic: require('../resources/logoEdit2.png'), description: 'Juicy beef patty on a fresh bun', price: '$230' },
//         { name: 'Pizza', pic: require('../resources/logoEdit2.png'), description: 'Cheese, sauce, and your favorite toppings', price: '$120' },
//         { name: 'Salad', pic: require('../resources/logoEdit2.png'), description: 'Fresh greens and veggies with dressing', price: '$250' },
//         { name: 'Fries', pic: require('../resources/logoEdit2.png'), description: 'Crispy golden fries', price: '$20' },
//         { name: 'Ice cream', pic: require('../resources/logoEdit2.png'), description: 'Creamy and delicious treat', price: '$240' }
//     ];

//     const renderItem = ({ item }) => (
//         <TouchableOpacity onPress={() => console.log(item)}>
//             <View style={styles.container}>
//                 <Image source={item.pic} style={styles.image} />
//                 <View style={styles.notificationInfo}>
//                     <Text style={styles.title}>{item.name}</Text>
//                     <Text style={styles.text}>{item.description}</Text>
//                     <Text style={styles.text}>{item.price}</Text>
//                 </View>
//                 <Text style={styles.time}>{item.price}</Text>
//             </View>
//         </TouchableOpacity>
//     );

//     const arr = [1, 2, 3, 4, 5, 6];

//     return (
//         // <Background> {/* Commented out Background component */}
//         <View style={{ backgroundColor: 'black' }}>
//             <FlatList
//                 style={styles.flatlist}
//                 data={data}
//                 renderItem={renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//             />
//             <View style={{ width: "100%", flexDirection: 'row', flexWrap: 'wrap', height: '100%' }}>
//                 {arr.map((item, index) => (
//                     <View key={index} style={{ width: '50%', backgroundColor: 'blue', height: "13%", borderColor: 'white', borderWidth: 2 }}>
//                         <Text style={{ textAlign: 'center', height: "20%" }}>{item}</Text>
//                     </View>
//                 ))}
//                 <View style={{ flexDirection: 'row', width: '100%', height: '100%', backgroundColor: 'red' }}>
//                     <View style={{ width: '33%', height: '13%', justifyContent: 'center', borderColor: 'white', borderWidth: 2 }}><Text style={{ textAlign: 'center' }}>1</Text></View>
//                     <View style={{ width: '33%', height: '13%', justifyContent: 'center', borderColor: 'white', borderWidth: 2 }}><Text style={{ textAlign: 'center' }}>2</Text></View>
//                     <View style={{ width: '33%', height: '13%', justifyContent: 'center', borderColor: 'white', borderWidth: 2 }}><Text style={{ textAlign: 'center' }}>3</Text></View>
//                 </View>
//             </View>
//         </View>
//         // {/* </Background> */}
//     );
// };

// const styles = StyleSheet.create({
//     flatlist: {
//         marginTop: 50,
//     },
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     image: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 10,
//     },
//     notificationInfo: {
//         flex: 1,
//         marginRight: 10,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     text: {
//         fontSize: 14,
//     },
//     time: {
//         color: '#888',
//     },
// });

// export default Notification;
