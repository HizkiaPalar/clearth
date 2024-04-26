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
    fontSize: 12.5,
    borderRadius: 5.5,
    padding: 12.5,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 5.5,
    borderLeftWidth: 5.5,
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
  },
});
