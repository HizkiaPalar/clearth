import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {Logo2} from '../../../assets/images';
import SearchBar from '../../atoms/SearchBar';

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
  if (type === 'withSB') {
    return (
      <View style={styles.containerWithPhoto}>
        <Image source={Logo2} style={styles.image} />
        <View style={styles.sb}>
          <SearchBar />
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
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#c3ffae',
    paddingLeft: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#020202',
    marginLeft: 103,
  },
  image: {
    width: 82,
    height: 75,
    marginLeft: -25,
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
    width: '50%',
  },
});
