import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon set

const NiceAlert = ({ visible, title, description, onClose, sure }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.container}>

                <View style={styles.content}>

                    <View style={styles.header}>

                        <TouchableOpacity onPress={() => { onClose() }} >
                            <Icon name="times" size={25} color="crimson" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <TouchableOpacity onPress={() => { sure ? onClose(2) : onClose() }}>
                        <Text style={styles.closeButton}>{sure ? 'Sure' : 'Close'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    header: {
        paddingRight: '2%',
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    content: {
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'black',
        padding: "5%",
        color: 'black',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        color: 'crimson',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        color: 'crimson',
        fontSize: 18,
    },
});

export default NiceAlert;
