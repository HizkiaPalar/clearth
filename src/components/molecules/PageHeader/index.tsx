import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {Logo2} from '../../../assets/images';

const PageHeader = ({label, backButton, onPress, type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerWithPhoto}>
        <Image source={Logo2} style={styles.image} />
        <View>
          <Text style={styles.appTitle}>Sign In</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  containerWithPhoto: {
    backgroundColor: '#c3ffae',
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#c3ffae',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 120 ,
  },
  image: {
    width: 82,
    height: 75,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#020202',
    flexDirection: 'column',
    paddingHorizontal: 80,
  },
});
