import Background from '../Wrappers/Background'
import { View, Image } from 'react-native'
import LottieAnimation from '../lottie/lottie'
import LogoAnimated from '../../resources/lottie/LogoScreen.json'
import { useSelector } from 'react-redux'
const LoadingScreen = ({ navigation }) => {
    const isAuthenticated = useSelector(state => state.IsAuthenticated)
    console.log(isAuthenticated.isAuthenticated)
    const handleOnFinishCallback = () => {
        if (isAuthenticated.isAuthenticated) {
            navigation.navigate('Main')
        }
        else {
            navigation.navigate('Auth')
        }
    }
    return (
        <Background>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <View style={{ position: 'absolute', width: 400, height: 400, justifyContent: 'center', alignItems: 'center' }}>
                    <LottieAnimation source={LogoAnimated} width={400} height={400} speed={1} loop={false} OnFinishCallback={handleOnFinishCallback} />
                </View>

                <View style={{ position: 'absolute', width: 200, height: 100, alignItems: 'center' }}>
                    <Image
                        source={require('../../resources/logoEdit2.png')}
                        style={{ width: 150, height: 80 }}
                    />
                </View>
            </View>
        </Background>
    )
}
export default LoadingScreen