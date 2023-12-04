
// eslint-disable-next-line import/named
import { View, FlatList } from 'react-native'

import ListingTile from './listing-tile';



const SearchList = ({ search }) =>

    <View className='h-[81%] mt-[12px]'>
        <FlatList
            data={search.data}
            renderItem={(data,) =>
                <ListingTile data={data} />
            }
            showsHorizontalScrollIndicator={false}
        />
    </View>

export default SearchList;