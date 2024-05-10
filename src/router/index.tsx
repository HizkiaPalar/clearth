import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, SignIn, SignUp, Home, Reporting, Addphoto} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Reporting"
        component={Reporting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Addphoto"
        component={Addphoto}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
