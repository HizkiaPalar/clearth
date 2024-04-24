import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {PageHeader} from '../molecules';

const Home = () => {
  return (
    <View style={{ flex: 1}}>
      <View>
        <PageHeader type="withSB" backButton={false} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Box title="Educate" />
        <Box title="Schedule" />
        <Box title="Reporting" />
      </View>
    </View>
  );
};

const Box = ({title}) => {
  return (
    <View
      style={{
        width: '80%',
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18}}>{title}</Text>
    </View>
  );
};

const Screen2 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 2 Content</Text>
  </View>
);

const Screen3 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 3 Content</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const Bt = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, tabBarLabel: () => null}}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false, tabBarLabel: () => null}}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{headerShown: false, tabBarLabel: () => null}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 25,
  },
  card: {
    backgroundColor: '#ffffff',
    width: 167,
    height: 'auto',
    borderWidth: 1,
    borderRadius: 21,
    borderColor: 'black',
  },
  cardImage: {
    height: 97,
    width: 167,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444444',
  },
  screenContainer: {
    flex: 1,
  },
});

export default Bt;
