// eslint-disable-next-line import/named
import { View, Modal, Text, Image, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../../../static-functions';
import { success } from '../../../static-img-url';

const DialogBox = ({ isVisible, setisible,navigation, setLoading,title, des }) => {
    const onclick =()=>{
        setisible(false)
        setLoading(false)
        navigation.pop()
    }

    return (
        <Modal animationType="fade" transparent visible={isVisible}  >
            <View className='h-[100%] bg-[#000]/30 w-[100%] mx-auto justify-center'>
                <View className='m-[24px] rounded-[8px] bg-white'>
                    <Image
                        className='h-[200px]  w-[200px] mx-auto'
                        source={success}
                    />
                    <Text className='font-[600] text-[18px] text-[#000] text-center w-[100%] mx-auto' >{capitalizeFirstLetter(title)}</Text>
                    <Text className='font-[600] text-[18px] text-[#2A2A2A]/50 text-center mx-auto'>{capitalizeFirstLetter(des)}</Text>
                    <View className='mx-auto mb-[20px] mt-[10px]'>
                        <TouchableOpacity className='' onPress={() => onclick()}>
                            <View>
                                <Text className='text-[18px] text-[#7C22FF] font-[600]'>
                                    {'Done'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DialogBox;
