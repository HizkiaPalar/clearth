import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddSchedule,
  Home,
  Reporting2,
  SplashScreen,
  SignIn,
  SignUp,
  Schedule,
} from '../pages';

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
        name="Schedule"
        component={Schedule}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reporting2"
        component={Reporting2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddSchedule"
        component={AddSchedule}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
