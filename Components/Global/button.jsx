
// eslint-disable-next-line import/named
import { TouchableOpacity, Text, View } from 'react-native'

import Loader from './loader';

const CustoomButton = ({ onSubmit, name, loading }) =>

    <TouchableOpacity className=' h-[44px] m-[16px] rounded-[6px] justify-center bg-[#732DD9] mt-[16px]' onPress={onSubmit} >
        {
            loading ?
                <View className='py-[10px] justify-center items-center'>
                    <Loader isLight />
                </View> :
                <Text className='font-[500] mx-auto py-[10px]  text-[14px] text-white'>{name}</Text>
        }
    </TouchableOpacity>

export default CustoomButton;