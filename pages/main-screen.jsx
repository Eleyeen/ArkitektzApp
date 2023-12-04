// eslint-disable-next-line import/named
import { SafeAreaView, View, } from 'react-native'
import { useEffect, useState, } from 'react';

import { fetchSearch, fetchTrending } from '../services/trending';
import { errorMessageConsole, } from '../static-functions';
import InputField from '../Components/Global/input-field';
import AppBar from '../Components/Global/app-bar';
import FeedbackSection from '../Components/ui/feedback-section';
import SearchList from '../Components/ui/search-listing';
import TrendingList from '../Components/ui/trending-list';

const MainScreen = ({ navigation }) => {
    const [trending, setTrending] = useState({});
    const [search, setSearch] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [pages, setPages] = useState(1);
    const [limit, setLimit] = useState(15);
    const [loader, setLoader] = useState(false);

    const handleOnndeached = () => {
        setLoader(true)
        setPages(pages + 1)
        const sum = pages * limit

        setLimit(sum)
    }

    useEffect(() => {
        fetchTrending(`?api_key=GRZck8aR020Pp9pKLSCYqO8LcOWBR3PA&&limit=${limit}`)
            .then((res) => {
                setTrending(res.data);
                setLoader(false)
            }).catch(error => {
                errorMessageConsole(error);
            });

        fetchSearch(`?api_key=GRZck8aR020Pp9pKLSCYqO8LcOWBR3PA&&limit=15&&q=${searchQuery}`)
            .then((res) => {
                setSearch(res.data);

            }).catch(error => {
                errorMessageConsole(error);
            });

    }, [limit, navigation, searchQuery])

    const onChange = (args) => {
        const { value } = args;

        setSearchQuery(value);
    }

    return (
        <SafeAreaView>
            <View className='bg-[#fff] h-[100%] w-[100%]'>
                <View>
                    <AppBar name="Listing Screen" navigation={navigation} />

                    <View className='h-[7%]  mt-[5%] mx-[20px]'>
                        <InputField classes="bg-white" name='latitude' onChange={onChange} placeholder='Enter Search' value={searchQuery} />
                    </View>

                    <FeedbackSection navigation={navigation} trending={trending} />
                    {
                        searchQuery ?
                            <SearchList search={search} />
                            :
                            <TrendingList handleOnndeached={handleOnndeached} loader={loader} trending={trending} />
                    }

                </View>
            </View>
        </SafeAreaView>
    )
}

export default MainScreen;
