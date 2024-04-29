import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {Logo2} from '../../../assets/images';
import SearchBar from '../../atoms/SearchBar';
import {Profile} from '../../../assets/images';

const PageHeader = ({label, backButton, onPress, type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerWithPhoto}>
        <View style={styles.container}>
          {backButton && (
            <Button type="icon-only" icon="icon-back" onPress={onPress} />
          )}
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    );
  }

  if (type === 'withPr') {
    return (
      <View style={styles.containerWithPhoto}>
        <Image source={Logo2} style={styles.image} />
        <View style={styles.sb}>
          <SearchBar />
          <Image source={Profile} style={styles.image2} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerWithPhoto}>
        <Image source={Logo2} style={styles.image} />
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  containerWithPhoto: {
    backgroundColor: '#c3ffae',
    paddingHorizontal: 24,

    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#c3ffae',
    paddingLeft: 24,
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -20,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#020202',
    paddingLeft: 115,
  },
  image: {
    width: 82,
    height: 75,
    marginLeft: -23,
    left: 10,
  },
  image2: {
    width: 80,
    height: 60,
    marginLeft: 235,
    bottom: 45,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#020202',
    flexDirection: 'column',
    paddingHorizontal: 80,
  },
  sb: {
    top: 30,
  },
});
