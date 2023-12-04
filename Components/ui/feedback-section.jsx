// eslint-disable-next-line import/named
import { View, Text, TouchableOpacity } from 'react-native'

const FeedbackSection = ({ trending, navigation }) =>
    <View className="px-[16px] h-[8%] bg-white flex-row justify-between ">

        <View className='my-auto'>
            <Text className='font-[500] text-[14px] text-[#2A2A2A] h-[22] mt-[14] capitalize ' numberOfLines={1}> {'Trending List'} </Text>

            <Text className='font-[400] text-[12px] text-[#666666]  mb-[14]'>
                {`${trending.data && trending.data.length} Results`}
            </Text>

        </View>
        <TouchableOpacity
            className='rounded-[4px] my-auto border-[#732DD9] justify-center border-[1px] h-[37px] w-[134]'
            onPress={() => navigation.navigate('app-feedback')}>
            <Text className='font-[600] text-[12px] text-[#732DD9] mx-auto ' numberOfLines={1}>
                {'Add Feed Back'}
            </Text>
        </TouchableOpacity>

    </View>

export default FeedbackSection;