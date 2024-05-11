import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddSchedule,
  Home,
  Reporting,
  SplashScreen,
  SignIn,
  SignUp,
  Schedule,
  Education,
  NatureWaste,
  FoodWaste,
  Plastic,
  Glass,
  Metal,
  RM_NatureWaste,
  RM_FoodWaste,
  RM_Plastic,
  RM_Glass,
  RM_Metal,
  Profile,
  ProfileFormat,
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
        name="Reporting"
        component={Reporting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddSchedule"
        component={AddSchedule}
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
      <Stack.Screen
        name="RM_NatureWaste"
        component={RM_NatureWaste}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RM_FoodWaste"
        component={RM_FoodWaste}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RM_Plastic"
        component={RM_Plastic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RM_Glass"
        component={RM_Glass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RM_Metal"
        component={RM_Metal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileFormat"
        component={ProfileFormat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
