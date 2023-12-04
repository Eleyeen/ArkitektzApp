// eslint-disable-next-line import/named
import {View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../pages/main-screen';
import SplashScreen from '../Components/ui/splash-screen';

const Stack = createNativeStackNavigator();

const Route = () =>

   <View>
     <NavigationContainer>
        <Stack.Navigator initialRouteName="splash-screen">
            <Stack.Screen
                component={SplashScreen}
                name="splash-screen"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                component={MainScreen}
                name="main-screen"
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
   </View>
    
export default Route;
