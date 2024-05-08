import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components/molecules';

const Reporting = () => {
  return (
    <View style={styles.container}>
      <PageHeader type="withPhoto" backButton={true} label="REPORTING" />
      <Image
        source={require('../../assets/images/Tps.png')}
        style={styles.imgTps}
      />
      <View style={styles.containerImg}>
        <Image
          source={require('../../assets/images/Pin.png')}
          style={styles.imgPin}
        />
        <Text style={styles.textNum}>1.480699,124.857406</Text>
        <Image
          source={require('../../assets/images/Marker.png')}
          style={styles.imgMarker}
        />
      </View>
      <View style={styles.containerBox}>
        <Text style={styles.textReport}>Reported Ilegal Bins</Text>
        <View style={styles.boxCoordinate}>
          <Image source={require('../../assets/images/box1.png')} />
          <View style={styles.textBox1}>
            <Text style={styles.cp}>COORDINATE POINTS</Text>
            <Text style={styles.ci}>CHECK IT</Text>
          </View>
          <View style={styles.textBox2}>
            <Image
              source={require('../../assets/images/Pin.png')}
              style={styles.pin2}
            />
            <Text style={styles.textNum2}>1.480699,124.857406</Text>
            <Image
              source={require('../../assets/images/Marker2.png')}
              style={styles.marker2}
            />
          </View>
        </View>
        <View style={styles.boxCoordinate2}>
          <Image
            source={require('../../assets/images/box2.png')}
            style={styles.box2}
          />
          <View style={styles.textBox3}>
            <Text style={styles.cp}>COORDINATE POINTS</Text>
            <Text style={styles.ci}>CHECK IT</Text>
          </View>
          <View style={styles.textBox4}>
            <Image
              source={require('../../assets/images/Pin.png')}
              style={styles.pin2}
            />
            <Text style={styles.textNum2}>1.480699,124.857406</Text>
            <Image
              source={require('../../assets/images/Marker2.png')}
              style={styles.marker2}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Reporting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 50,
  },
  containerBox: {
    flexDirection: 'row',
  },
  imgTps: {
    width: '100%',
  },
  imgPin: {
    right: 0,
    bottom: 4,
    height: 51,
  },
  textNum: {
    fontSize: 20,
    color: '#fff',
    right: 58,
    bottom: 1,
  },
  textNum2: {
    marginLeft: 1,
  },
  textReport: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginLeft: 30,
    marginTop: -29,
  },
  imgMarker: {
    bottom: 4,
    right: 9,
    height: 48,
  },
  boxCoordinate: {
    height: 134,
    width: 276,
    backgroundColor: '#C3FFAE',
    borderRadius: 15,
    marginTop: 6,
    marginLeft: -197,
  },
  boxCoordinate2: {
    height: 134,
    width: 276,
    backgroundColor: '#C3FFAE',
    borderRadius: 15,
    marginTop: 6,
    marginLeft: 35,
  },
  textBox1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 4,
  },
  textBox2: {
    flexDirection: 'row',
  },
  textBox3: {
    flexDirection: 'row',
  },
  textBox4: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 4,
  },
  pin2: {
    height: 23,
    width: 23,
  },
  marker2: {
    marginLeft: 70,
    height: 23,
    width: 23,
  },
  cp: {
    left: 10,
    fontSize: 10,
    color: 'black',
  },
  ci: {
    right: 10,
    fontSize: 10,
    color: 'black',
  },
  box2: {
    width: 110,
    borderRadius: 15,
  },
});
