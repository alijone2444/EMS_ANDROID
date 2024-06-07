
import { View, ImageBackground, StyleSheet, Text, Dimensions, Switch, KeyboardAvoidingView, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/Wrappers/Background';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import GlobalCostant from '../../constants/GlobalConstants';
import axios from 'axios';
import NiceAlert from '../../components/alertComponent/alert';
function SignUpScreen({ navigation }) {
    const [isChecked, setIsChecked] = useState(true);
    const [rollNo, setrollNo] = useState('')
    const [password, setPassword] = useState('')
    const [conformPassword, setconformPassword] = useState('')
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const [items, setItems] = useState(GlobalCostant.departmentOptions);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [errorMessage, seterrorMessage] = useState('')
    const [errorTitle, seterrorTitle] = useState('')

    const handleSubmit = () => {
        if (!rollNo || !password || !conformPassword || !value) {
            setAlertVisible(true);
            seterrorTitle('Fields Missing')
            seterrorMessage('There are still some fields not filled.Please fill them to sign up sucessfully')
            return;
        }
        if (password != conformPassword) {
            setAlertVisible(true);
            seterrorTitle('Unmatched fields')
            seterrorMessage('password and confirm password does not match.Please fill the fields with same text')
            return
        }
        axios.post(`${GlobalCostant.baseUrl}signup`, { Rollno: rollNo, password: password, department: value })
            .then(data => {
                navigation.navigate('AccountCreated');
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });
    };

    return (
        <Background>
            <View style={{ height: "100%" }}>
                <NiceAlert
                    visible={isAlertVisible}
                    title={errorTitle}
                    description={errorMessage}
                    onClose={() => setAlertVisible(false)}
                />
                <Text style={styles.title_create_account}>Create Your {'\n'}Account</Text>
                <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>

                    <View style={styles.formContainer}>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Roll number"
                                onChangeText={(text) => { setrollNo(text) }}
                                placeholderTextColor="white"
                                value={rollNo}
                            />
                            <Icon name="user" size={20} color="white" style={{ position: 'absolute', right: 10, bottom: '50%' }} />
                        </View>
                        <View style={styles.inputContainer}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                placeholder='Select Department'
                                setItems={setItems}
                                zIndex={1000}
                                onChangeValue={(value) => { console.log(value); }}
                                arrowIconStyle={{ backgroundColor: 'white', }}
                                dropDownContainerStyle={{ backgroundColor: "black" }}
                                style={{ backgroundColor: 'transparent', paddingLeft: '2%' }}
                                textStyle={{ color: 'white', fontSize: 17 }}
                            />
                            <View style={{ width: '100%', backgroundColor: 'white', height: 1 }}></View>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => { setPassword(text) }}
                                placeholderTextColor="white"
                                value={password}
                            />
                            <Icon name="lock" size={20} color="white" style={{ position: 'absolute', right: 10, bottom: '50%' }} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                onChangeText={(text) => { setconformPassword(text) }}
                                placeholderTextColor="white"
                                value={conformPassword}

                            />
                            <Icon name="lock" size={20} color="white" style={{ position: 'absolute', right: 10, bottom: '50%' }} />
                        </View>
                        <TouchableOpacity onPress={toggleCheckbox} style={{ flexDirection: 'row', width: '100%', marginBottom: 20 }}>
                            <View style={[styles.checkboxContainer, isChecked && styles.checked]}>
                                <Icon name={isChecked ? 'check-square' : 'square-o'} size={24} color={'white'} />
                            </View>
                            <Text>I agree the</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('Terms and Condition') }} >
                                <Text style={{ color: 'blue', fontSize: 15, marginLeft: 4, color: 'purple' }}>terms and conditions</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
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
                                onPress={handleSubmit}
                            >
                                <Text style={{ color: 'white' }} >Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </KeyboardAvoidingView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5%' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('SignInScreen', { name: 'Jane' })
                        }}
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
                            Already have an account?
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
    checkboxContainer: {
        width: 24,
        height: 24,
    },
    checked: {
        backgroundColor: 'transparent',
        marginRight: 2
    },
})
export default SignUpScreen;
