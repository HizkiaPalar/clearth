import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '../../components'; 
import MapPin from '../../assets/icon/MapPin.svg';
import MapMarker from '../../assets/icon/MapMarker';

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
        <Text style={styles.reported}>REPORTED ILLEGAL BINS</Text>
        <Text style={styles.report}>LET'S REPORT IT!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({  
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    marginTop: 20,
    backgroundColor: 'transparent', 
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  reported: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  report: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Reporting;
