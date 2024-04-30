import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  SignIn,
  SignUp,
  Home,
  Education,
  NatureWaste,
  FoodWaste,
  Plastic,
  Glass,
  Metal,
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
        name="Education"
        component={Education}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NatureWaste"
        component={NatureWaste}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FoodWaste"
        component={FoodWaste}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Plastic"
        component={Plastic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Glass"
        component={Glass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Metal"
        component={Metal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
