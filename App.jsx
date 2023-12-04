
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './pages/splash-screen';
import MainScreen from './pages/main-screen';
import AppFeedBack from './pages/app-feedback';


const Stack = createNativeStackNavigator();

const App = () =>

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

      <Stack.Screen
        component={AppFeedBack}
        name="app-feedback"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>


export default App;
