
import { View, ImageBackground, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
// import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/Wrappers/Background';
function SigninSignoutOption({ navigation }) {
    return (
        <Background>
            <View style={{
                flex: 1,
            }}>
                <View style={styles.ContainerLoginLogout}>
                    <View style={{
                        flex: 1, alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Image
                            source={require('../../resources/ist-img-edited.jpg')}
                            style={styles.istImg}
                            resizeMode="stretch"
                        />

                        <Text style={{ fontSize: 17, fontWeight: 'bold', }}>Institute Of Space And Technology</Text>
                        <Text>Access Education Gateway</Text>
                    </View>

                    <View style={styles.buttonsGroup}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={[styles.btn, { backgroundColor: '#ffff' }]}

                            onPress={() => {
                                navigation.navigate('SignInScreen', { name: 'Jane' })
                            }}
                        >
                            <Text style={{ color: 'black', textAlign: 'center' }}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={{ height: 15 }}></View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={[styles.btn, {
                                backgroundColor: 'transparent',
                                borderWidth: 1, borderColor: "white"
                            }]}
                            onPress={() => {
                                navigation.navigate('SignUpScreen', { name: 'Jane' })
                            }}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.socialMedia}>
                    <Text>Sign in with social media</Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => {/* Handle social media login */ }}>
                            <View style={{ margin: '2%' }}>
                                <Icon name="facebook" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {/* Handle social media login */ }}>
                            <View style={{ margin: '2%' }}>
                                <Icon name="twitter" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {/* Handle social media login */ }}
                        >
                            <View style={{ margin: '2%' }}>
                                <Icon name="linkedin" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    ContainerLoginLogout: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        marginVertical: '20%',
    },
    istImg: {
        width: 200,
        height: 120,
        marginVertical: '5%'
    },
    buttonsGroup: {
        width: '70%',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '10%'
    },
    btn: {
        borderRadius: 20,
        overflow: 'hidden',
        padding: "6%",
    },
    socialMedia: {
        display: 'flex',
        alignItems: 'center',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: '2%',
    }
});

export default SigninSignoutOption