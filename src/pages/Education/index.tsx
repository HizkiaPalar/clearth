import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, PageHeader} from '../../components';

const Education = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto"
        label="EDUCATION"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={60} />
      <Text style={styles.heading1}>CATEGORIES</Text>
      <Gap height={6} />
      <View style={styles.bgcontainer1}>
        <Text style={styles.heading2}>ORGANIC</Text>
      </View>
      <Gap height={7} />
      <View style={styles.bgcontainer2}>
        <View style={styles.bgcontainer3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#FFFEE7',
  },
  heading1: {
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    marginLeft: 30,
  },
  heading2: {
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    paddingLeft: 7,
  },
  bgcontainer1: {
    flexDirection: 'column',
    borderRadius: 8,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: 110,
    backgroundColor: '#C3FFAE',
    marginLeft: 30,
  },
  bgcontainer2: {
    width: 350,
    height: 170,
    borderRadius: 10,
    backgroundColor: '#00FFCB',
    marginLeft: 30,
    marginRight: 29,
  },
  bgcontainer3: {
    marginHorizontal: 50,
    marginTop: 10,
    width: 250,
    height: 50,
    backgroundColor: 'white',
  },
});

export default Education;
