import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../../assets/icon';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" />
      <SearchIcon style={styles.icon} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    width: 142,
    height: 37,
    backgroundColor: 'white',
    marginLeft: 64,
    borderRadius: 10,
    paddingLeft: 15,
    top: 8,
  },
  icon: {
    marginTop: 6,
    marginLeft: 45,
  },
});
