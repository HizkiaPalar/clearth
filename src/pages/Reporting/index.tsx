import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PageHeader } from '../../components'; 
import Add from '../../assets/images/Add.png';
import MapMarker from '../../assets/icon/MapMarker.svg';
import MapPin from '../../assets/icon/MapPin.svg';
import Report from '../../assets/images/Report.png';
import Tps from '../../assets/images/Tps.png';
import { Icon } from '@rneui/themed';

const Reporting = () => {
  return (
    <View style={{ flex: 1 }}>
      <PageHeader
        type="withPhoto"
        label="Reporting"
        backButton={true}
      />
      <View style={styles.content}>
        <View style={[styles.tpContainer, { flex: 1 }]}>         
          <View>
            <Image source={Tps} style={styles.addImage2}/>
              <MapMarker/>
                <MapPin/>
          </View>         
        </View>
        <View style={styles.greenBox}>
          <Image source={Add} style={styles.addImage} />
        </View>
        <Text style={styles.reported}>REPORTED ILLEGAL BINS</Text>
        <View style={styles.secondGreenBox}>
          <View>
          <Image source={Report} style={styles.rep}/>
        </View>
          <View style={styles.fontContainer}>
            <Text style={styles.text3}>COORDINATE POINTS</Text>
            <Text style={styles.text4}>CHECK IT</Text> 
          </View>
          <View style={styles.iconContainer}>
                <MapPin/>
                <Text style={styles.text5}>1.480699,124.857406</Text> 
                <MapMarker/>
            </View>   
        </View>        
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
    marginTop: 300,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  report: {
    fontSize: 20,
    marginTop: 19,
    marginLeft: 29,
    marginBottom: 188,
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
    backgroundColor: '#C3FFAE',
    marginTop: 12,
    borderRadius: 15,
    marginLeft: 29,
  },
  addImage: {
    width: 30,
    height: 30,
  },
  addImage2:{
    width:450,
    height:300,
    
  },
  rep: {
    width: 276,
    height: 86,

  },
  tpContainer: {
    alignItems: 'center',
  },
  tp: {
    width: 480,
    height: 312,
    marginTop: -20
  },
  text3:{
    fontSize:10,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 10,
  },
  text4:{
    fontSize:10,
    fontFamily: 'Poppins-SemiBold',
  
  },
  text5:{
    fontSize:15,
    fontFamily: 'Poppins-Light',
    paddingRight: 60,
    color:'#000000'
  
  },
  fontContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight: 10,

    
  },
  iconContainer:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    
  },
});

export default Reporting;
