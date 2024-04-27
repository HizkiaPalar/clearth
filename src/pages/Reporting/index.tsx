import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PageHeader } from '../../components'; 
import MapPin from '../../assets/icon/MapPin.svg';
import MapMarker from '../../assets/icon/MapMarker';
import Add from '../../assets/images/Add.png';

const Reporting = () => {
  return (
    <View style={{ flex: 1 }}>
      <PageHeader
        type="withPhoto"
        label="Reporting"
        backButton={true}
      />
      <View style={styles.content}>
        <MapPin/>
        <MapMarker/>
        <View style={styles.greenBox}>
          <Image source={Add} style={styles.addImage} />
        </View>
        <Text style={styles.reported}>REPORTED ILLEGAL BINS</Text>
        <View style={styles.secondGreenBox}></View>
        <View style={styles.ThirdGreenBox}></View>
        <Text style={styles.report}>LET'S REPORT IT!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({  
  content: {
    marginTop: 20,
  },
  reported: {
    fontSize: 20,
    marginLeft: 29,
    marginTop: 180,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  report: {
    fontSize: 20,
    marginTop: 23,
    marginLeft: 29,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  greenBox: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#63C427',
    marginTop: 520,
    marginLeft: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondGreenBox: {
    width: 276,
    height: 134,
    backgroundColor: '#63C427',
    marginTop: 12,
    borderRadius: 15,
    marginLeft: 29,
  },
  
  addImage: {
    width: 30,
    height: 30,
  },
});

export default Reporting;
