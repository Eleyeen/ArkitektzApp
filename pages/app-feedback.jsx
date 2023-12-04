// eslint-disable-next-line import/named
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { AirbnbRating } from 'react-native-ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppBar from '../Components/Global/app-bar';
import InputField from '../Components/Global/input-field';
import { addfeedBack } from '../form-init-values';
import CustoomButton from '../Components/Global/button';
import { feedback } from '../static-img-url';
import DialogBox from '../Components/Global/dialog';

const AppFeedBack = ({ navigation }) => {
    const [formdata, setformData] = useState({ ...addfeedBack });
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [validation, setValidation] = useState(false);

    const ratingCompleted = ({ rating, }) => {
        setformData({
            ...formdata,
            star: String(rating)
        })
    };

    const onChange = (args) => {
        const { name, value } = args;
        const newFD = { ...formdata }

        newFD[name] = value
        setformData(newFD);
    }

    const SaveData = () => {
        const isValid = formdata.name && formdata.email

        if (isValid) {
            setLoading(true)
            AsyncStorage.setItem('feedback', formdata,);
            setVisible(true)
        } else {
            setValidation(true);
        }
    }

    return (
        <SafeAreaView>
            <View className='bg-white h-[100%]'>
                <AppBar name="App Feedback" navigation={navigation} />
                <View className='mx-[16px]'>
                    <DialogBox des="Your FeedBack has been submitted successfully." isVisible={visible} navigation={navigation} setLoading={setLoading} setisible={setVisible} title="Success!" />

                    <View className='mx-auto mt-[24px]'>
                        <Image className='w-[280px] h-[200px]' source={feedback} />
                    </View>

                    <View className='mt-[34px]'>
                        <AirbnbRating
                            count={5}
                            defaultRating={2}
                            onFinishRating={(e) => ratingCompleted({ rating: e })}
                            reviews={["Worst", "Bad", "Neutral", "Good", "Excellent"]}
                            selectedColor="#732DD9"
                            showRating={false}
                            size={37}
                            unSelectedColor="#DDDDDD"
                        />
                    </View>

                    <InputField classes="bg-white" label="Name" name='name' onChange={onChange} placeholder='Enter Name' validation={validation && !formdata.name} value={formdata.name} />

                    <View className='mt-[16px]'>
                        <InputField classes="bg-white" label="Email" name='email' onChange={onChange} placeholder='Enter Email' validation={validation && !formdata.email} value={formdata.email} />
                    </View>

                    <View className='mt-[24px]'>
                        <CustoomButton loading={loading} name="Add Feeback" onSubmit={SaveData} />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default AppFeedBack;
