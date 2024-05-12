import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest}/>
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
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'rgba(0, 0, 0, 0.25)',
  },
});
