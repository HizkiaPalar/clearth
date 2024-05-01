import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';
import {Min, Plus} from '../../assets/images';

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
            <View style={styles.minutes}>
              <View style={styles.minutes2}>
                <Image source={Min} style={styles.image1} />
                <View>
                  <Text style={styles.text3}>30</Text>
                  <View style={styles.linetext} />
                </View>
                <Image source={Plus} style={styles.image1} />
              </View>
              <View style={styles.containerbox3}>
                <Text style={styles.text5}>MINUTES</Text>
              </View>
            </View>
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
    height: 350,
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
  minutes: {
    width: 91,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  minutes2: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 5,
  },
  text3: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 20,
    paddingLeft: 3,
  },
  image1: {
    width: 15,
    height: 15,
    marginTop: 3,
  },
  linetext: {
    color: 'black',
    height: 1,
    width: 32,
    backgroundColor: 'black',
  },
  text5: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 10,
    paddingTop: 6,
  },
});
