
import { View ,ImageBackground,StyleSheet, Text,Dimensions,Image, Button ,TouchableOpacity  } from 'react-native';
// import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

function SigninSignoutOption(){
    return(
        <View>
            <ImageBackground 
                source={require('../../resources/signIn_sign_out_background.jpg')}
                style={styles.background}
                resizeMode="stretch" >
            </ImageBackground>
            <View style={styles.overlay}></View>
                <Text style={styles.welcome}>Welcome Back</Text>
                <View style={styles.ContainerLoginLogout}>               
                    <Image
                        source={require('../../resources/ist-img-edited.jpg')}
                        style={styles.istImg}
                        resizeMode="stretch"
                        />
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Institute Of Space And Technology</Text>
                    <Text>Access Education Gateway</Text>
                    <View style={styles.buttonsGroup}>   
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={[styles.btn, { backgroundColor: '#ffff' }]}
                            onPress={() => {
                            // Handle Sign In
                            }}
                        >
                        <Text style={{ color: 'black',textAlign:'center' }}>Sign In</Text>
                        </TouchableOpacity>
                    <View style={{ height: 15 }}></View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={[styles.btn, { backgroundColor: 'transparent',
                            borderWidth: 1,borderColor: "white" }]}
                            onPress={() => {
                            // Handle Sign Up
                            }}
                        >
                        <Text style={{ color: 'white',textAlign:'center' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.socialMedia}>
                    <Text>Sign in with social media</Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => {/* Handle social media login */}}>
                            <View style={{margin:'2%'}}>
                                <Icon name="facebook" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {/* Handle social media login */}}>
                            <View style={{margin:'2%'}}>
                                <Icon name="twitter" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {/* Handle social media login */}}
                        >
                            <View style={{margin:'2%'}}>
                                <Icon name="linkedin" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    overlay: {
        position:'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
    ContainerLoginLogout:{
        width:'100%',
        display:'flex',
        alignItems:'center',
    },
    istImg:{
        width: '40%',
        height: '20%',
        marginVertical:'10%'
    },
    welcome:{
        fontFamily:'Roboto-Bold',
        fontSize:30,
        color:'white',
        paddingTop:'15%',
        paddingBottom:'15%',
        textAlign:'center',

      },
      buttonsGroup:{
        width:'70%',
        display:'flex',
        flexDirection:'column',
        marginVertical:'10%'
      },
      btn:{
        borderRadius:20,
        overflow: 'hidden',
        padding:"6%",
      },
      socialMedia:{
        display:'flex',
        alignItems:'center',
      },
      iconContainer:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:'2%',
      }
  });

export default SigninSignoutOption