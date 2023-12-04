// eslint-disable-next-line import/named
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { capitalizeFirstLetter } from '../../static-functions';
import { BackArrow } from '../../static-img-url';

const AppBar = ({ name, navigation }) =>

    <View className='py-[10px] w-[100%]  h-[6%] flex-row  bg-[#000] '>
        <TouchableOpacity className={`ml-[16px]    absolute `} onPress={() => navigation.pop()}>
            <View className='my-[15px]'>
                <Image
                    className='w-[20] h-[20] '
                    source={BackArrow}
                />
            </View>
        </TouchableOpacity>

        <View className='w-[85%] justify-center  mx-auto'>
            <Text className='font-[500]   text-center text-[16px] text-white '>
                {capitalizeFirstLetter(name)}
            </Text>
        </View>
    </View>

export default AppBar;
