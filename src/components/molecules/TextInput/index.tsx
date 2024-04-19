import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  input: {
    fontFamily: 'Poppins-SemiRegular',
    fontSize: 14,
    borderRadius: 10,
    padding: 15,
    borderBottomColor: '#000',
    shadowRadius: 0.5,
    shadowOpacity: 0.2,
    elevation: 6.5,
  },
});
