import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import animationData from '../../resources/lottie/Evento_bot.json'; // Ensure correct path
import animationData2 from '../../resources/lottie/BotTyping.json'; // Ensure correct path
import Background from '../../components/Wrappers/Background';
import MarginWrapper from '../../components/Wrappers/marginWrapper';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const flatListRef = useRef();
    const clearChat = () => {
        setMessages([])
    }
    const [hideTempChat, setHideTempChat] = useState(false);

    // Test data for chat
    const handleSend = (message) => {
        const text = message || input;
        if (text.trim() === '') return;

        setLoading(true);
        const userMessage = { text, sender: 'user' };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput(''); // Clear input field immediately after sending the message

        setTimeout(() => {
            const botResponse = { text: 'This is a test response from Evento', sender: 'bot' };
            setMessages([...updatedMessages, botResponse]);
            setLoading(false);
        }, 1000); // Simulate API response delay
    };

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    return (
        <Background>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <View style={styles.header}>

                    <LottieView source={animationData} autoPlay loop style={styles.lottie} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.title, {}]}> Evento</Text>

                        <Text style={[styles.title, { backgroundColor: 'purple' }]}> Chat </Text>
                    </View>
                    <TouchableOpacity onPress={clearChat} style={{ paddingLeft: '5%' }}>
                        <Icon name="trash" size={28} color="white" />
                    </TouchableOpacity>
                </View>
                {!hideTempChat && (
                    <View style={{ width: '100%', alignItems: 'center', marginTop: '3%' }}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center', width: '50%', borderRadius: 50, padding: '1%',
                            backgroundColor: 'rgba(255,255,255,0.4)'
                        }}>
                            This chat is temporary
                        </Text>
                    </View>
                )}
                <FlatList
                    data={messages}
                    ref={flatListRef}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
                            <Text style={styles.senderText}>{item.sender === 'user' ? 'You' : 'Evento'}</Text>
                            <Text style={styles.messageText}>{item.text}</Text>
                            {loading && index === messages.length - 1 && (
                                <LottieView source={animationData2} autoPlay loop style={styles.typingIndicator} />
                            )}
                        </View>
                    )}
                    contentContainerStyle={styles.messagesList}
                    onScroll={() => setHideTempChat(true)}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message"
                        value={input}
                        onChangeText={setInput}
                        onSubmitEditing={() => handleSend()}
                    />
                    <TouchableOpacity onPress={() => handleSend()} style={styles.sendButton}>
                        <Icon name="send" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView horizontal contentContainerStyle={styles.quickActions}>
                        <TouchableOpacity style={styles.quickActionButton} onPress={() => handleSend('Hi, how are you?')}>
                            <Icon name="hand-paper-o" size={24} color="white" />
                            <Text style={styles.quickActionText}>Greet Evento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quickActionButton} onPress={() => handleSend('Can you help me with something?')}>
                            <Icon name="question-circle-o" size={24} color="white" />
                            <Text style={styles.quickActionText}>Ask for Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quickActionButton}>
                            <Icon name="cogs" size={24} color="white" />
                            <Text style={styles.quickActionText}>Feedback</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </Background >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'transparent',
        borderBottomColor: 'grey',
        borderWidth: 1
    },
    lottie: {
        width: 40,
        height: 40,
    },
    title: {
        marginLeft: 10,
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    messagesList: {
        padding: 10,
        flexGrow: 1,
    },
    messageContainer: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'purple',
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'purple',
    },
    senderText: {
        fontWeight: 'bold',
    },
    messageText: {
        marginTop: 5,
    },
    typingIndicator: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(128,0,128,0.3)',
    },
    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 20,
        backgroundColor: 'purple',
    },
    sendButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: 'purple',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quickActions: {
        flexDirection: 'row',
        backgroundColor: 'purple',
        padding: 10,
        height: '100%'
    },
    quickActionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    quickActionText: {
        marginLeft: 10,
        color: 'white',
    },
});

export default Chatbot;


