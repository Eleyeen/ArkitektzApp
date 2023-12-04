// eslint-disable-next-line import/named
import { View, Image } from 'react-native'
import { useEffect, } from 'react';

import { splashIcon } from '../static-img-url';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('main-screen')
        }, 3000)


    }, [navigation])

    return (
        <View className='bg-[#fff] h-[100%] w-[100%] justify-center'>

            <View className='mx-auto'>
                <Image
                    className='h-[250px] w-[280px] '
                    source={splashIcon} />
            </View>
        </View>
    )
}

export default SplashScreen;
