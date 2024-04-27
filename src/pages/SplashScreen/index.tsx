import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../assets/icon/Logo.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Reporting');
    }, 3000);
  }, []);

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