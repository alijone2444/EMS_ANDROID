import { View, StyleSheet, Text, Dimensions, Image, Button, TouchableOpacity, TextInput } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/Wrappers/Background';
function SignInScreen({ navigation }) {
  return (
    <Background>
      <View style={{ height: "100%", width: '100%', display: 'flex', justifyContent: "center" }}>

        <Text style={styles.hello}>Hello,{'\n'}Sign In!</Text>
        <View style={styles.donthaveAccount}>
          <Text style={{
            color: 'white',
            paddingHorizontal: "5%",
            fontSize: 18
          }}>
            Dont have an account?
          </Text>
          <TouchableOpacity
            style={{ width: "100%", paddingRight: '10%' }}
            activeOpacity={0.6}
            onPress={() => {

              navigation.navigate('SignUpScreen', { name: 'Jane' })
            }}
          >

            <Text style={{
              textDecorationLine: 'underline',
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'right'
            }}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', height: "60%", backgroundColor: 'transparent' }}>
          <View>
            <Svg
              height={100}
              width="100%"
              viewBox="0 0 1440 220">
              <Path
                fill="rgba(255, 255, 255, 0.3)"
                d="M0,288L80,256C160,224,320,160,480,149.3C640,139,800,181,960,170.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </Svg>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", height: '50%', position: 'relative' }}></View>
            <Svg
              height={250}
              width="100%"
              viewBox="0 0 1440 220">
              <Path
                fill="rgba(255, 255, 255, 0.3)"
                d="M 0 288 L 80 256 C 160 224 320 160 480 149.3 C 640 139 800 181 960 170.7 C 1120 160 1280 96 1360 64 L 1440 32 L 1425 -445 L 4 -466 Z"
              />
            </Svg>

          </View>
        </View>
        <View style={{ position: 'absolute', width: '100%', alignItems: 'center', backgroundColor: "transparent" }}>
          {/* Username input field */}
          <View style={styles.TextfieldsContainer}>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Username"
              placeholderTextColor="white"
            />
            <Icon name="user" size={20} color="white" />
          </View>
          <View style={styles.TextfieldsContainer}>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="white"
            />
            <Icon name="key" size={20} color="white" />
          </View>
          <View style={{
            flexDirection: "row", justifyContent: 'space-between', width: "70%", height: "20%",
            marginVertical: "5%",
          }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              onPress={() => {
                navigation.navigate('home')
              }}
            >
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>Sign In</Text>
              </View>
            </TouchableOpacity>

            {/* Forgot password link */}
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity >
                <Text style={styles.forgotPasswordText}
                >Forget Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </Background>
  )
}
const styles = StyleSheet.create({

  input: {
    fontSize: 20,
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10
  },
  TextfieldsContainer: {
    width: '70%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFF',
    paddingBottom: 10,
    marginVertical: "5%"
  },
  inputStyle: {
    fontSize: 15,
    padding: 0,
    flex: 1,
    color: 'white'
  },
  forgotPasswordContainer: {
    padding: "5%",
    textAlign: 'right',

  },
  forgotPasswordText: {
    color: "white",
  },
  btn: {
    backgroundColor: '#1164c3',
    width: "50%",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    overflow: 'hidden',
    padding: "4%",
  },
  hello: {
    position: 'absolute'
    , top: 0,
    fontSize: 35,
    color: 'white',
    padding: '10%',
    paddingLeft: "5%"
  },
  donthaveAccount: {
    flexDirection: 'Column',
    position: 'absolute'
    , bottom: 0,
    right: 0,
    padding: '3%',
    alignItems: 'center',
  }
})
export default SignInScreen;