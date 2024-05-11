import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
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
  Addphoto,
} from '../pages';
import Alarms from '../screens/Alarms';
import Settings from '../screens/Edit';
import Ring from '../screens/Ring';

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
      <Stack.Screen
        name="Addphoto"
        component={Addphoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Alarms"
        component={Alarms}
        options={params => ({
          ...headerStyles,
          title: 'Alarms',
          headerRight: () => (
            <AddButton
              title={'+ '}
              onPress={() => params.navigation.navigate('Edit')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Edit"
        component={Settings}
        options={{...headerStyles, title: 'Alarm'}}
      />
      <Stack.Screen
        name="Ring"
        component={Ring}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;

function AddButton({title, onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      underlayColor="#fff">
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export const headerStyles = {
  headerStyle: {
    elevation: 0,
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
