import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components/molecules';

const Reporting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader
        type="withPhoto"
        label="Reporting"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Image
          source={require('../../assets/images/Tps.png')}
          style={styles.imgTps}
        />
        <View style={styles.containerImg}>
          <Image
            source={require('../../assets/images/Mp.png')}
            style={styles.imgPin}
          />
          <Text style={styles.textNum}>1.480699,124.857406</Text>
          <Image
            source={require('../../assets/images/Mm.png')}
            style={styles.imgMarker}
          />
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.textReport}>REPORTED ILLEGAL BINS</Text>
          <View style={styles.boxCoordinate}>
            <Image source={require('../../assets/images/Report.png')} />
            <View style={styles.textBox1}>
              <Text style={styles.cp}>COORDINATE POINTS</Text>
              <Text style={styles.ci}>CHECK IT</Text>
            </View>
            <View style={styles.textBox2}>
              <Image
                source={require('../../assets/images/Mp.png')}
                style={styles.pin2}
              />
              <Text style={styles.textNum2}>1.480699,124.857406</Text>
              <Image
                source={require('../../assets/images/Mm.png')}
                style={styles.marker2}
              />
            </View>
          </View>
          <View style={styles.boxCoordinate2}>
            <Image
              source={require('../../assets/images/Report.png')}
              style={styles.box2}
            />
            <View style={styles.textBox3}>
              <Text style={styles.cp}>COORDINATE POINTS</Text>
              <Text style={styles.ci}>CHECK IT</Text>
            </View>
            <View style={styles.textBox4}>
              <Image
                source={require('../../assets/images/Mp.png')}
                style={styles.pin2}
              />
              <Text style={styles.textNum2}>1.480699,124.857406</Text>
              <Image
                source={require('../../assets/images/Mm.png')}
                style={styles.marker2}
              />
            </View>
            <Text style={styles.Lp}>LETS REPORT IT!</Text>
            <View style={styles.boxCoordinate3}>
              <TouchableOpacity onPress={() => navigation.navigate('Addphoto')}>
                <Image
                  source={require('../../assets/images/Add.png')}
                  style={styles.add}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginLeft: -220,
  },
  boxCoordinate2: {
    height: 134,
    width: 276,
    backgroundColor: '#C3FFAE',
    borderRadius: 15,
    marginTop: 6,
    marginLeft: 20,
  },
  boxCoordinate3: {
    height: 60,
    width: 60,
    backgroundColor: '#63C427',
    borderRadius: 15,
    alignItems: 'center',
    marginLeft: -295,
    bottom: -35,
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
    fontFamily: 'Poppins-Regular',
  },
  ci: {
    right: 10,
    fontSize: 10,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  Lp: {
    color: 'black',
    marginLeft: -295,
    bottom: -20,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  box2: {
    width: 110,
    borderRadius: 15,
  },
  add: {
    width: 50,
    height: 50,
    top: 5,
  },
});
