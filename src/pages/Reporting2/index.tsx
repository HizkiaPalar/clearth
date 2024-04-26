import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';

const Reporting2 = ({navigation}) => {
  return (
    <View>
      <PageHeader
        type="withPhoto"
        label="Reporting"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.containerbox}>
        <Text style={styles.text1}>ADD PHOTO</Text>
      </View>
      <View>
        <Text style={styles.text2}>ADD COORDINATE</Text>
        <View style={styles.containerbox2}>
          <Text>Add coodinate</Text>
        </View>
      </View>
    </View>
  );
};

export default Reporting2;

const styles = StyleSheet.create({
  containerbox: {
    marginTop: 53,
    marginLeft: 31,
    marginRight: 31,
    height: 233,
    borderRadius: 15,
    backgroundColor: '#57F9D4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  text2: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginTop: 8,
    marginLeft: 31,
  },
  containerbox2: {
    marginLeft: 31,
    marginRight: 31,
    height: 41,
    backgroundColor: '#C3FFAE',
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
