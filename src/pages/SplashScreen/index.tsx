import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/icon/Logo.svg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Clearth</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c3ffae',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
  },
});
