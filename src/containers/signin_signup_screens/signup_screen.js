
import { View, ImageBackground, StyleSheet, Text, Dimensions, Platform, KeyboardAvoidingView, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/Wrappers/Background';
function SignUpScreen({ navigation }) {

    return (
        <Background>
            <View style={{ height: "100%" }}>

                <Text style={styles.title_create_account}>Create Your {'\n'}Account</Text>
                <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>

                    <View style={styles.formContainer}>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name"
                                onChangeText={() => { console.log('hellowrld') }}
                                placeholderTextColor="white"
                            />
                            <Icon name="user" size={20} color="white" style={{ position: 'absolute', right: 10, bottom: '50%' }} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                onChangeText={() => { console.log('hellowrld') }}
                                placeholderTextColor="white"
                            />
                            <Icon name="envelope" size={20} color="white" style={{ position: 'absolute', right: 10, bottom: '50%' }} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={() => { console.log('hellowrld') }}
                                placeholderTextColor="white"
                            />
                            <Icon name="lock" size={20} color="white" style={{ position: 'absolute', right: 10, bottom: '50%' }} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                onChangeText={() => { console.log('hellowrld') }}
                                placeholderTextColor="white"
                            />
                            <Icon name="lock" size={20} color="white" style={{ position: 'absolute', right: 10, bottom: '50%' }} />
                        </View>
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <TouchableOpacity
                                style={{
                                    width: '40%',
                                    borderRadius: 20,         // Set your desired border radius
                                    paddingVertical: 10,      // Adjust padding as needed
                                    alignItems: 'center',     // Center the content horizontally
                                    marginTop: 10,            // Adjust margin as needed
                                    borderColor: 'white',
                                    borderWidth: 1
                                }}
                                onPress={() => {
                                    navigation.navigate('AccountCreated')
                                }}
                            >
                                <Text style={{ color: 'white' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5%' }}>
                        <TouchableOpacity onPress={() => {/* Handle social media login */ }}
                        >
                            <View >
                                <Icon name="arrow-right" size={40} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ padding: '5%' }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 18
                        }}>
                            Dont have an account?
                        </Text>
                        <TouchableOpacity
                            style={{ width: "100%", paddingRight: '10%' }}
                            activeOpacity={0.6}
                            onPress={() => {

                                navigation.navigate('SignInScreen', { name: 'Jane' })
                            }}
                        >
                            <Text style={{
                                textDecorationLine: 'underline',
                                fontSize: 25,
                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'right'
                            }}>Sign In!</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({

    title_create_account: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        padding: '5%',
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        flex: 1
    },
    inputContainer: {
        width: '100%',
        position: 'relative',
        marginVertical: '5%'
    },
    input: {
        color: 'white',
        width: '100%',
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom: 16,
        paddingLeft: 8,
    },
})
export default SignUpScreen;
