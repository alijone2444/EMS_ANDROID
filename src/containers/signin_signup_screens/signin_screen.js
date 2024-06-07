import { View, StyleSheet, Text, Dimensions, ActivityIndicator, Image, Button, TouchableOpacity, TextInput } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/Wrappers/Background';
import axios from 'axios'
import { useEffect, useState } from 'react';
import GlobalCostant from '../../constants/GlobalConstants';
import { getToken, storeToken } from '../../components/localStorage/localStorageToken';
import NiceAlert from '../../components/alertComponent/alert';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../ReduxStore/actions/isAuthenticated';
function SignInScreen({ navigation }) {

  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [errorMessage, seterrorMessage] = useState('')
  const [errorTitle, seterrorTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = async () => {
    if (!userName || !password) {
      setAlertVisible(true);
      seterrorTitle('Missing Fields')
      seterrorMessage('please fill up the given fields to login sucessfully')
      return;
    }
    else {
      setLoading(true)
      await axios.post(`${GlobalCostant.baseUrl}login`, { Rollno: userName, password: password })
        .then(response => {
          setLoading(false)
          storeToken('authToken', response.data.token);
          storeToken('userType', response.data.userType);
          dispatch(setAuthenticated(true));

          if (response.data.token && response.data.success) {
            if (response.data.tour > 1) {
              navigation.navigate('Main');
            }
            else {
              navigation.navigate('tour')
            }
          }
        })

        .catch(error => {
          console.log('eoor:', error);
          setAlertVisible(true);
          setLoading(false)
          seterrorTitle('login Failed')
          seterrorMessage('Either account not found or credentials entered are wrong')
        })

    }

  }

  return (
    <Background>
      <NiceAlert
        visible={isAlertVisible}
        title={errorTitle}
        description={errorMessage}
        onClose={() => setAlertVisible(false)}
      />

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
              height={200}
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
              placeholder="Roll number"
              placeholderTextColor="white"
              value={userName}
              onChangeText={(text) => { setUsername(text) }}
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
              value={password}
              onChangeText={(text) => { setPassword(text) }}
            />
            <Icon name="key" size={20} color="white" />
          </View>
          <View style={{
            flexDirection: "row", justifyContent: 'space-between', width: "70%", height: "20%",
            marginVertical: "5%",
          }}>
            {loading ?
              <ActivityIndicator size="large" color="white" /> :
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btn}
                onPress={
                  handleSubmit
                }
              >
                <View>
                  <Text style={{ color: 'white', textAlign: 'center' }}>Sign In</Text>
                </View>
              </TouchableOpacity>}

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
    fontWeight: 'bold',
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