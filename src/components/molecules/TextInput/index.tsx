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
    fontFamily:'Poppins-SemiRegular',
    borderWidth: 0,
    fontSize: 14,
    borderRadius: 4,
    padding: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#83D565',
  },
});
