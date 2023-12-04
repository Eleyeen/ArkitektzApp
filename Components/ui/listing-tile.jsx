// eslint-disable-next-line import/named
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { format } from 'date-fns/esm';


const ListingTile = ({ data }) =>
    <View className=''  >

        <TouchableOpacity className='bg-white mx-[16px] h-[125px] my-[5px] mr-[12px] rounded-[8px] elevation shadow' >
            <View className=' h-[125px]  flex-row' >

                {
                    data.item.url ?
                        <View className='w-[130px] h-[125px]  '>
                            <Image className='h-[125px] rounded-l-[6px]' source={{ uri: data.item.images.original.url }} />
                        </View>
                        :
                        <Image className='w-[35%] bg-slate-500  h-[125px] rounded-[6px]'
                        />
                }

                <View className=' pl-[8px] h-[135px] w-[62%]  pt-[8px]'>
                    <View className='flex-row'>
                        <View>
                            <Text className='text-[14px] h-[18px] font-[600] text-[#000] font-interBold uppercase' numberOfLines={1}>
                                {data.item.title}
                            </Text>

                            <Text className='text-[12px]  mt-[5px] font-[400]  text-[#666666] ' numberOfLines={1} >
                                {data.item.username ? data.item.username : 'NO User Name'}

                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text className='text-[12px] mt-[8px] font-[400]  text-[#666666]  ' numberOfLines={1}>
                            {data.item.source ? data.item.source : 'Source is Zero '}
                        </Text>

                        <Text className='text-[12px] font-[400] mt-[5px] text-[#666666]' numberOfLines={1}>
                            {'Rating :'} {data.item.rating}

                        </Text>
                    </View>

                    <Text className='text-[14px] font-[600] w-[179px] mt-[5px] text-[#000]' numberOfLines={1}>
                        {'Upload Date :'} {format(new Date(data.item.import_datetime), 'yyyy-MM-dd')}
                    </Text>

                </View>

            </View>
        </TouchableOpacity>
        <View className='bg-[#dddddd] h-[1px] w-[100%] my-[10px]' />

    </View>

export default ListingTile;
