
// eslint-disable-next-line import/named
import { View, FlatList } from 'react-native'

import Loader from '../Global/loader';

import ListingTile from './listing-tile';




const TrendingList = ({ trending ,handleOnndeached,loader}) =>

<View>
{
    // =============== tending List  ================ //////// 
    trending.data ?
        <View className='h-[82%] mt-[12px]'>
            <FlatList
                data={trending.data}
                onEndReached={handleOnndeached}
                onEndReachedThreshold={0.1} // Load more items when 90% scrolled
                renderItem={(data,) =>
                    <ListingTile data={data} />
                }
                showsHorizontalScrollIndicator={false}
            />
            {loader ?
                <View className='absolute bottom-10 left-[48%]'>
                    <Loader />
                </View> : undefined
            }
        </View>
        :
        undefined
}
</View>

export default TrendingList;