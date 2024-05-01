import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';
import {color} from '@rneui/base';

const AddSchedule = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader
        type="withPhoto"
        label="Schedule"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.containerbox}>
        <View style={styles.containerbox2}>
          <View style={styles.containerbox3}>
            <Text style={styles.text1}>00 : 00</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.containerbox4}>
            <Text style={styles.text2}>ADD DESCRIPTION</Text>
            <View style={styles.add} />
          </View>
          <View style={styles.containerbox4}>
            <Text style={styles.text2}>REMINDS BEFORE</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddSchedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEDC',
    height: '100%',
  },
  containerbox: {
    alignItems: 'center',
    marginTop: 47,
  },
  containerbox2: {
    backgroundColor: '#C3FFAE',
    height: 333,
    width: 333,
    borderRadius: 15,
  },
  text1: {
    fontSize: 70,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  line: {
    color: 'black',
    height: 2,
    width: 333,
    backgroundColor: 'black',
  },
  text2: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  containerbox3: {
    alignItems: 'center',
  },
  containerbox4: {
    paddingLeft: 15,
    paddingTop: 28,
  },
  add: {
    width: 304,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
